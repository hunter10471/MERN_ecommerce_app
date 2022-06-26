const logger = require('../utils/logger');
const dotenv = require('dotenv');
dotenv.config();
const secretStripeKey = process.env.STRIPE_SECRET;
const stripe = require('stripe')(secretStripeKey);

const postPayment = (req,res) =>{
    try {
        stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: 'inr',
            description:req.body.description
        },(stripeErr, stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr);
            }else{
                res.status(201).json(stripeRes);
            }
        });
    } catch (error) {
        res.status(500).json(error);
        logger.error({message:'An error occured with the stripe payment.',error:error});
    }
};


module.exports = {postPayment};