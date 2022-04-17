const User = require('../models/user')
const jwt = require('jsonwebtoken')
const cryptojs = require('crypto-js')


const generateAuthToken = (user) =>{
    try {
        const token = jwt.sign({_id: (user._id).toString()}, process.env.JWT_SECRET_KEY)
        user.tokens = user.tokens.concat([{token: token}])
        return token      
    } catch (err) {
        console.log('Token generation error!');
        throw err
    }
}


const signUp = async (req,res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptojs.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET_KEY).toString()
    })
    try {
        const token = generateAuthToken(user)
        console.log(token);
        const savedUser = await user.save()
        res.cookie(`auth_token`, token, {
            maxAge: 604800000,
            httpOnly: true
        })
        res.status(201).json({signup : true, message: 'Signup successful.'})
    } catch (error) {
        res.status(400).json({signup: false, message: 'Signup unsuccessful.'})
    }
}


const login = async (req,res) =>{
    const existingUser = await User.findOne({username: req.body.username})
    if(!existingUser) return res.status(404).json({ isLogin: false, message:'User not found.'})
    const hashedPassword = cryptojs.AES.decrypt(existingUser.password, process.env.CRYPTOJS_SECRET_KEY)
    const originalPassword = hashedPassword.toString(cryptojs.enc.Utf8)
    if(originalPassword !== req.body.password) return res.status(403).json({ isLogin: false, message:'Incorrect credentials.'}) 
    const token = generateAuthToken(existingUser)
    res.cookie("auth_token", token, {
        maxAge: 604800000,
        httpOnly: true
    })
    res.status(200).json({ isLogin: true, message:'User login Successful!'})

}

const tokenAuthentication = async (req,res) =>{
    try {
        const token = req.cookies.auth_token
        if(token){
             const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
             const user = await User.findOne({_id: verifyToken._id})
             const {password, ...others} = user._doc
            res.status(200).json({isToken: true, message:'Token provided is valid.', user: others})
        }else{
            console.log('Token verification failed.');
            res.status(401).json({isToken: false, message: 'Token verification failed.'})
        } 
    } catch (error) {
        console.log('Token provided is invalid.');
        res.status(401).json({isToken: false, message: 'Token provided is invalid.'})
    }

}



module.exports = {
    signUp,
    login,
    tokenAuthentication,
}