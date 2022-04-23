const router = require('express').Router();
const { verifyTokenAndAdmin} = require('../controllers/authController');
const { addProduct, getProducts, getProduct, getProductsByCategory, deleteProduct, updateProduct } = require('../controllers/productController');


router.post('/',verifyTokenAndAdmin,addProduct);
router.get('/',getProducts);
router.get('/', getProductsByCategory);
router.get('/:id',getProduct);
router.put('/:id',verifyTokenAndAdmin,updateProduct);
router.delete('/:id',verifyTokenAndAdmin,deleteProduct);

module.exports = router;