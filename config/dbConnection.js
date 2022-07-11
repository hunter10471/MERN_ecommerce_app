const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const logger = require('../utils/logger');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerceAPI').then(()=>{
    logger.info('Connected to database succesfully.');
}).catch((error)=>{
    logger.error({message:'Could not connect to database.',error:error});
    process.exit(1);
});
