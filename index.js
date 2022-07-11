const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const orderRoute = require('./routes/orders');
const productRoute = require('./routes/products');
const cartRoute = require('./routes/carts');
const paymentRoute = require('./routes/stripe');
const logger = require('./utils/logger');
const path = require('path');
require('./config/dbConnection');


dotenv.config();
app.use(cors());
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next(); 
};
app.use(allowCrossDomain);
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use('/api/carts', cartRoute);
app.use('/api/payment', paymentRoute);

//eslint-disable
__dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  logger.info('Server running on port ' + PORT);
});
