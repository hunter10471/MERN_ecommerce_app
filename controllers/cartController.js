const Cart = require('../models/cart');
const logger = require('../utils/logger');

const createCart = async(req,res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(201).json({cartCreation:true, message:'Following cart has been successfully created.', cart:savedCart});
    } catch (error) {
        logger.error('There was an error creating this cart.');
        res.status(500).json({cartCreation: false, message:'There was an error creating this cart.',error:error});
    }
};

const deleteCart = async(req,res) =>{
    try {
        const existingCart = await Cart.findByIdAndDelete(req.params.id);
        if(existingCart) return res.status(200).json({message:'Following cart has been successfully deleted.',cart:existingCart});
        else return res.status(404).json({message:'NO cart with the following ID exists.'});
    } catch (error) {
        logger.error('There was an error deleting the given cart.');
        res.status(500).json({message:'here was an error deleting the given cart.',error:error});
    }

};

const updateCart = async(req,res) =>{
    try {
        const existingCart = await Cart.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        if(existingCart) return res.status(200).json({message:'Cart has been updated successfully.',cart:existingCart});
        else return res.status(404).json({message:'No cart with the given ID exists.'});
    } catch (error) {
        logger.error('There was an error updating this cart.');
        res.status(500).json({message:'There was an error updating this cart.',error:error});
    }
};

const getCart = async(req,res) =>{
    try {
        const existingCart = await Cart.findById(req.params.id);
        if(existingCart) return res.status(200).json({message:'Cart found.',cart:existingCart});
        else return res.status(404).json('Cart with the given id does not exists.');

    } catch (error) {
        logger.error('There was an error fetching this cart.');
        res.status(500).json({message:'There was an error fetching this cart.',error:error});
    }
};

const getCarts = async(req,res) =>{
    const qId = req.query.id;
    try {
        if(qId){
            const existingCart = await Cart.findById(qId);
            if(existingCart) return res.status(200).json({message:'Cart found.',cart:existingCart});
            else return res.status(404).json('Cart with the given id does not exists.');
        }else{
            const existingCarts = await Cart.find().sort({_id: -1});
            if(existingCarts) return res.status(200).json({message:'Carts found.',carts:existingCarts});
            else return res.status(404).json('No carts exists.');
        }

    } catch (error) {
        logger.error('There was an error fetching carts.');
        res.status(500).json({message:'There was an error fetching carts.',error:error});
    }
};

module.exports  = {
    createCart,
    deleteCart,
    updateCart,
    getCart,
    getCarts
};