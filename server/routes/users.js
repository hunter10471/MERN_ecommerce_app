const router = require('express').Router();
const { verifyTokenAndAdmin, verifyTokenAndAuth} = require('../controllers/authController');
const {getUsers, updateUser, deleteUser, getUserPublic} = require('../controllers/userController');

router.get('/public', getUserPublic);
router.get('/',verifyTokenAndAdmin, getUsers);
router.put('/:id', verifyTokenAndAuth, updateUser);
router.delete('/:id', verifyTokenAndAuth, deleteUser);



module.exports = router;