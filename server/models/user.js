const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId:{
        type: String,
        default: null
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default:false,
        required:true,
    },
    gender:{
        type: String
    },
    avatar:{
        type: String
    },
    phone:{
        type: Number,
        index: true,
        sparse: true,
        unique: true,
    },
},{timestamps:true});



module.exports  = mongoose.model('User',userSchema);