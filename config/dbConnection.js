const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const logger = require('../utils/logger');

mongoose.connect(process.env.MONGO_URI).then(()=>{
    logger.info('Connected to database succesfully.');
}).catch((error)=>{
    logger.error({message:'Could not connect to database.',error:error});
    process.exit(1);
});
