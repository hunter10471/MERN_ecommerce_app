const router = require('express').Router();
const {signUp, login, emailSent, changePassword} = require('../controllers/authController');

router.post('/register', signUp);
router.post('/login', login);
router.post('/email-sent', emailSent);
router.post('/change-password', changePassword);

module.exports = router;