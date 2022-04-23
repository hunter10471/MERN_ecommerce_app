const Order = require('../models/order');
const logger = require('../utils/logger');

const getOrders = async(req,res) =>{
    try {
        const orderId = req.query.id;
        if(orderId){
            const order = await Order.findById(orderId);
            if(!order) return res.status(404).json('The following order does not exist.');
            res.status(200).json(order);
        }else{
            const order = await Order.find().sort({createdAt: -1});
            if(!order) return res.status(404).json('No orders exist.');
            res.status(200).json(order);
        }
    } catch (error) {
        logger.error('There was an error fetching the given order.');
        res.status(500).json({message:'There was an error fetching the given order.', error:error});
    }
};

const getUserOrders = async(req,res) =>{
    try {
        const qPending = req.query.pending;
        const qProcessing = req.query.processing;
        const qShipped = req.query.shipped;
        const userId = req.params.id;
        const orderId = req.query.orderId;
        if(qPending){
            try {
                const order = await Order.find({ $and:[{userId:userId}, {$or:[{shipmentStatus:'pending'},{paymentStatus:'pending'}]}]}).sort({createdAt:-1});
                if(!order) return res.status(404).json('No pending orders exist for the given user.');
                res.status(200).json({message:'Orders found: ',order:order});             
            } catch (error) {
                logger.error('There was an error fetching this user\'s pending orders.');
                res.status(500).json({message:'here was an error fetching this user\'s pending orders.',error:error});
            }
        }
        else if(qProcessing){
            try {
                const order = await Order.find({ $and:[{userId:userId}, {$or:[{shipmentStatus:'processing'},{paymentStatus:'procesing'}]}]}).sort({createdAt:-1});
                if(!order) return res.status(404).json('No processing orders exist for the given user.');
                res.status(200).json({message:'Orders found: ',order:order});             
            } catch (error) {
                logger.error('There was an error fetching this user\'s processing orders.');
                res.status(500).json({message:'here was an error fetching this user\'s processing orders.',error:error});
            }
        }
        else if(qShipped){
            try {
                const order = await Order.find({ $and:[{userId:userId}, {$or:[{shipmentStatus:'shipped'},{paymentStatus:'paid'}]}]}).sort({createdAt:-1});
                if(!order) return res.status(404).json('No shipped orders exist for the given user.');
                res.status(200).json({message:'Orders found: ',order:order});             
            } catch (error) {
                logger.error('There was an error fetching this user\'s shipped orders.');
                res.status(500).json({message:'here was an error fetching this user\'s shipped orders.',error:error});
            }
        }
        else if(orderId){
            try {
                const order = await Order.find({$and:[{userId:userId},{_id:orderId}]}).sort({createdAt:-1});
                if(!order) return res.status(404).json('No shipped orders exist for the given user.');
                res.status(200).json({message:'Orders found: ',order:order});             
            } catch (error) {
                logger.error('There was an error fetching this user\'s shipped orders.');
                res.status(500).json({message:'here was an error fetching this user\'s shipped orders.',error:error});
            }
        }
        else{
            try {
                const order = await Order.find({userId:userId}).sort({createdAt:-1});
                if(!order) return res.status(404).json('No orders exist for the given user.');
                res.status(200).json({message:'Orders found: ',order:order});             
            } catch (error) {
                logger.error('There was an error fetching this user\'s orders.');
                res.status(500).json({message:'here was an error fetching this user\'s orders.',error:error});
            }
        }
    } catch (error) {
        logger.error('There was an error fetching this user\'s orders.');
        res.status(500).json({message:'here was an error fetching this user\'s orders.',error:error});
    }
};


const createOrder = async(req,res)=>{
    try {
        const order = await new Order(req.body);
        await order.save();
        res.status(201).json({message:'Following order has been created: ',order:order});
    } catch (error) {
        logger.error('An error occured while creating this order.');
        res.status(500).json({message:'An error occured while creating this order.',error:error});
    }
};

const deleteOrder = async(req,res)=>{
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if(!order) return res.status(404).json('Order does not exists.');
        res.status(200).json({message:'Following order has been deleted successfully.',order:order});
    } catch (error) {
        logger.error('There was an error deleting this order.');
        res.status(500).json({message:'There was an error deleting this order.', error:error});
    }
};


const updateOrder = async(req,res)=>{
    try {
        const order = await Order.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        if(!order) return res.status(404).json('Order does not exists.');
        res.status(200).json({message:'Order has been updated successfully,',order:order});
    } catch (error) {
        logger.error('The given could not be updated.');
        res.status(500).json({message:'The given could not be updated.',error:error});
    }
};

module.exports = {
    getOrders,
    getUserOrders,
    createOrder,
    deleteOrder,
    updateOrder
};