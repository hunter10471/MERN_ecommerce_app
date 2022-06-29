const router = require('express').Router();
const { verifyTokenAndAdmin, verifyTokenAndAuth} = require('../controllers/authController');
const {getUsers, updateUser, deleteUser, getUserPublic, getUser} = require('../controllers/userController');

router.get('/public', getUserPublic);
router.get('/',verifyTokenAndAdmin, getUsers);
router.get('/:id',verifyTokenAndAuth, getUser);
router.put('/:id', verifyTokenAndAuth, updateUser);
router.delete('/:id', verifyTokenAndAuth, deleteUser);



module.exports = router;