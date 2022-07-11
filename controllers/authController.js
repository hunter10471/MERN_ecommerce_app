const User = require('../models/user');
const Otp = require('../models/otp');
const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
const logger = require('../utils/logger');
const nodemailer = require('nodemailer');

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


const mailer = (mail, otp) =>{
    const transport = nodemailer.createTransport({
        service: 'gmail',
        port: 4000,
        secure: false,
        auth:{
            user: process.env.MAIL_EMAIL,
            pass: process.env.MAIL_PASS
        }
    });
    const mailOptions = {
        from: process.env.MAIL_EMAIL,
        to: mail,
        subject: 'OTP for your Cart-it account',
        text: `Dear user, use the following OTP to gain access to your cart-it account : ${otp}`
    };
    transport.sendMail(mailOptions, (error, info)=>{
        if(error){
            logger.error(error);
            console.log({message:'There was an error processing your request.', error: error});
        }else{
            logger.info(info);
            console.log({message:'Mail sent successfully.', info: info});
        }
    });
};


const emailSent = async(req,res) =>{
    try {
        const existingUser = await User.findOne({email: req.body.email});
        if(!existingUser) return res.status(404).json({ userFound: false, message:'User not found.'});
        const otpCode = Math.floor(Math.random()* 10000 + 1);
        const otpData = new Otp({
            email: req.body.email,
            code: otpCode,
            expiresIn: new Date().getTime() + 300*1000
        });
        const otpSaved = await otpData.save();
        mailer(req.body.email,otpCode);
        res.status(201).json({message: 'OTP created successfully.',otp:otpSaved});
    } catch (error) {
        logger.error(error);
        res.status(500).json({message:'There was an error processing your request.', error: error});
    }
};

const changePassword = async(req,res) =>{
    try {
        const existingOtp = await Otp.findOne({email: req.body.email, code: req.body.otpCode});
        if(!existingOtp) return res.status(404).json({ otpFound: false, message:'OTP not found.'});
        const currentTime = new Date().getTime();
        const diffTime = existingOtp.expiresIn - currentTime;
        if(diffTime < 0){
            return res.status(401).json({message:'Token has expired.'});
        }else{
            const user = await User.findOne({email: req.body.email});
            if(!user) return res.status(404).json({ isFound: false, message:'User not found.'});
            req.body.password = cryptojs.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET_KEY).toString(); 
            user.password = req.body.password;
            await user.save();
            res.status(200).json({message:'Password updated successfully, please login.'});
        }
    } catch (error) {
        logger.error(error);
        res.status(500).json({message:'There was an error processing your request.', error: error});
    }

};


module.exports = {
    signUp,
    login,
    verifyTokenAndAdmin,
    verifyTokenAndAuth,
    emailSent,
    changePassword
};