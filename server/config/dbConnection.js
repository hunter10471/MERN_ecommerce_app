const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to database succesfully.');
}).catch((err)=>{
    console.log('An error occured: '+ err);
})
