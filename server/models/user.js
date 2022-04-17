const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String
    },
    avatar:{
        type:String
    },
    phone:{
        type:Number,
        unique:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    tokens:[
        {
            token:{
                type:String
            }
        }
    ]
},{timestamps:true})



module.exports  = new mongoose.model('User',userSchema)