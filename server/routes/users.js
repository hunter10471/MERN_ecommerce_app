const router = require('express').Router();
const { verifyTokenAndAdmin, verifyTokenAndAuth} = require('../controllers/authController');
const {getAllUsers, getUser, updateUser, deleteUser, getUserPublic} = require('../controllers/userController');

router.get('/public', getUserPublic);
router.get('/',verifyTokenAndAdmin,getAllUsers);
router.get('/:id',verifyTokenAndAdmin, getUser);
router.put('/:id', verifyTokenAndAuth, updateUser);
router.delete('/:id', verifyTokenAndAuth, deleteUser);


module.exports = router;