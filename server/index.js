const epxress = require('express');
const app = epxress();
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const orderRoute = require('./routes/orders');
const productRoute = require('./routes/products');
const cartRoute = require('./routes/carts');
const paymentRoute = require('./routes/stripe');
const logger = require('./utils/logger');
require('./config/dbConnection');

dotenv.config();
app.use(cors());
app.use(epxress.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use('/api/carts', cartRoute);
app.use('/api/payment', paymentRoute);




app.listen(4000, () => {
    logger.info('Server running on port 4000.');
});
