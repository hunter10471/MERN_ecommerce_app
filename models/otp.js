const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    expiresIn: Number
},{timestamps:true});



module.exports  = mongoose.model('Otp',otpSchema);