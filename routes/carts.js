const router = require('express').Router();
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../controllers/authController');
const { createCart, deleteCart, updateCart, getCart, getCarts } = require('../controllers/cartController');


router.post('/', verifyTokenAndAuth, createCart);
router.delete('/:id', verifyTokenAndAuth, deleteCart);
router.put('/:id', verifyTokenAndAuth, updateCart);
router.get('/:id', verifyTokenAndAuth, getCart);
router.get('/', verifyTokenAndAdmin, getCarts);

module.exports = router;