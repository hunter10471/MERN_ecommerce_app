const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../controllers/authController');
const { createOrder, getUserOrders, getOrders, updateOrder, deleteOrder } = require('../controllers/orderController');
const router = require('express').Router();

router.post('/:id',verifyTokenAndAuth,createOrder);
router.get('/:id',verifyTokenAndAuth,getUserOrders);
router.get('/',verifyTokenAndAdmin,getOrders);
router.put('/:id',verifyTokenAndAdmin,updateOrder);
router.delete('/:id',verifyTokenAndAdmin,deleteOrder);

module.exports = router;