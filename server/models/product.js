const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
    },
    productImg:{
        type: String,
        default: null
    },
    productPrice:{
        type: Number,
        required: true,
    },
    productStock: {
        type: Boolean,
        default: true  
    },
    productCategory: Array,
    productDiscount: Number,
    productDescription: String,
    productQuantity: Number,

},{timestamps:true});

module.exports = mongoose.model('Product', productSchema);