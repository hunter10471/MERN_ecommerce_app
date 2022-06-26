const router = require('express').Router();
const { verifyTokenAndAuth} = require('../controllers/authController');
const { postPayment } = require('../controllers/stripeController');

router.post('/:id',verifyTokenAndAuth,postPayment);

module.exports = router;