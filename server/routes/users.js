const User = require('../models/user')
const router = require('express').Router()
const cryptojs = require('crypto-js')


router.get('/findUser/:id', async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        !user && res.status(404).json('User not found.')
        const {password, ...others} = user._doc
        res.status(200).json(others)
    } catch (error) {
        console.log(error);
    }
})



module.exports = router