const User = require('../models/user');
const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
const logger = require('../utils/logger');

const generateAuthToken = (user) =>{
    try {
        const token = jwt.sign({_id: (user._id).toString(), isAdmin: user.isAdmin}, process.env.JWT_SECRET_KEY, {
            expiresIn:'3d'
        }); 
        return token;    
    } catch (err) {
        logger.error('Token generation error!');
        throw err;
    }
};

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        try {
            jwt.verify(authHeader, process.env.JWT_SECRET_KEY, (err, user)=>{
                if(err) return res.status(403).json('Invalid token.');
                req.user = user;
                next();
            });   
        } catch (error) {
            logger.error('There was an error verifying the provided token.');
            res.status(500).json({message:'There was an error verifying the provided token.',error:error});
        }
    }else{
        logger.error('Unathenticated action.');
        return res.status(401).json('Unathenticated action.');
    }
};

const verifyTokenAndAdmin = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            try {
                next();
            } catch (error) {
                logger.error('There was an error verifiying adminship.');
                res.status(500).json({message:'There was an error verifiying adminship.',error:error});
            }
        }else{
            logger.error('Unathenticated action.');
            res.status(403).json('Unathenticated action.');
        }
    });
};

const verifyTokenAndAuth = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user._id === req.params.id || req.user.isAdmin){
            try {
                next();
            } catch (error) {
                logger.error('There was an error authenticating this action.');
                res.status(500).json({message:'There was an error authenticating this action.',error:error});
            }
        }else{
            res.status(403).json('Unathenticated action.');
        }
    });
};


const signUp = async (req,res) => {
    const {password, username, email} = req.body;
    const existingUser = await User.findOne({$or:[{username:username},{email:email}]});
    if(existingUser){
        res.status(400).json({signup: false, message: 'User already exists.', });
    }else{
        const user = new User({
            username:username,
            email:email,
            password: cryptojs.AES.encrypt(password, process.env.CRYPTOJS_SECRET_KEY).toString() 
        });
        try {
            const token = generateAuthToken(user);
            await user.save();
            res.status(201).json({signup : true, message: 'Signup successful.', accessToken: token});
        } catch (error) {
            logger.error(error);
            res.status(500).json({signup: false, message: 'Signup unsuccessful.', error: error});
        }
    }
};


const login = async (req,res) =>{
    const existingUser = await User.findOne({username: req.body.username});
    if(!existingUser) return res.status(404).json({ isLogin: false, message:'User not found.'});
    const {password, ...others} = existingUser._doc; //eslint-disable-line
    const hashedPassword = cryptojs.AES.decrypt(existingUser.password, process.env.CRYPTOJS_SECRET_KEY); 
    const originalPassword = hashedPassword.toString(cryptojs.enc.Utf8);
    if(originalPassword !== req.body.password) return res.status(403).json({ isLogin: false, message:'Incorrect credentials.'});
    const token = generateAuthToken(existingUser);
    res.status(200).json({ isLogin: true, message:'User login Successful!', accessToken: token, user: others});

};





module.exports = {
    signUp,
    login,
    verifyTokenAndAdmin,
    verifyTokenAndAuth
};