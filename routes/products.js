const router = require('express').Router();
const { verifyTokenAndAdmin} = require('../controllers/authController');
const { addProduct, getProducts, getProductsByCategory, deleteProduct, updateProduct, searchProducts } = require('../controllers/productController');


router.post('/',verifyTokenAndAdmin,addProduct);
router.get('/',getProducts);
router.get('/search',searchProducts);
router.get('/category', getProductsByCategory);
router.put('/:id',verifyTokenAndAdmin,updateProduct);
router.delete('/:id',verifyTokenAndAdmin,deleteProduct);

module.exports = router;