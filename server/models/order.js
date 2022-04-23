const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    products:[
        {
            productId: String,
            quantity:{
                type: Number,
                default: 1
            },
            price: Number
        }
    ],
    amount:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    paymentMode:{
        type:String,
        required: true
    },
    paymentStatus:{
        type: String,
        default: 'pending'
    },
    shipmentStatus:{
        type: String,
        default: 'pending'
    }
},{timestamps:true});

module.exports = mongoose.model('Order', orderSchema);