const router = require('express').Router()
const {signUp, login, tokenAuthentication} = require('../controllers/userController')

router.post('/register', signUp)
router.post('/login', login)
router.post('/authentication', tokenAuthentication)



module.exports = router