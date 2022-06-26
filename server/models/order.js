const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    products:{
        type: Array,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    billingAddress:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    zipCode:{
        type:String,
        required: true
    },
    vatNumber:{
        type:String,
        default: null
    },
    companyName:{
        type: String, 
        default: null
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