const Product = require('../models/product');
const logger = require('../utils/logger');

const addProduct = async(req,res)=>{
    try {
        const newProduct = await new Product(req.body);
        await newProduct.save();
        res.status(201).json({message:'Successfully added the following product: ', product:newProduct});
    } catch (error) {
        logger.error({message:'There was an error while adding the product.',error:error});
        res.status(500).json({message:'There was an error while adding the product.', error:error});
    }
};

const getProducts = async(req,res) =>{
    try {
        const id = req.query.id;
        if(id){
            const product = await Product.findById(id);
            if(!product) return res.status(404).json('The product with the given ID does not exists.');
            res.status(200).json({message:'Following product has been fetched successfully: ',product:product});
        }
        else{
            const products = await Product.find().sort({_id:-1});
            if(!products) return res.status(404).json('No products found.');
            res.status(200).json({message:'Following products have been fetched: ',products:products});
        }
    } catch (error) {
        logger.error({message:'An error occured while fetching the products.',error:error});
        res.status(500).json({message:'An error occured while fetching the products.', error:error});
    }
};

const searchProducts =async(req,res) =>{
    try {
        const name = req.query.name;
        if(name){ 
            const product = await Product.find({productName: new RegExp(name, 'i')}); 
            if(!product) return res.status(404).json('The product with the given name does not exists.');
            res.status(200).json({message:'Following product has been fetched successfully: ',product:product});
        }
    }
    catch (error) {
        logger.error({message:'An error occured while fetching the products.',error:error});
        res.status(500).json({message:'An error occured while fetching the products.', error:error});
    }

};


const updateProduct = async(req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        if(!product) return res.status(404).json('The product with the given ID does not exists.');
        res.status(200).json({message:'Following product has been updated successfully: ',product:product});
    } catch (error) {
        logger.error({message:'An error occured while fetching the product.',error:error});
        res.status(500).json({message:'An error occured while fetching the product.', error:error});
    }
};
const deleteProduct = async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) return res.status(404).json('The product with the given ID does not exists.');
        res.status(200).json({message:'The following product has been removed successfully.',product:product});
    } catch (error) {
        logger.error({message:'An error occured while deleting the product.',error:error});
        res.status(500).json({message:'An error occured while deleting the product.', error:error});
    }
};

const getProductsByCategory  = async(req,res) =>{
    try {
        const qNew = req.query.new;
        const qCategory = req.query.category;
        if(qNew){
            try {
                const products = await Product.find().sort({createdAt: -1}).limit(5);
                if(!products) return res.status(404).json('No products found.');
                res.status(200).json({message:'Following products have been fetched: ',products:products});
            } catch (error) {
                logger.error({message:'An error occured while fetching all the latest products.',error:error});
                res.status(500).json({message:'An error occured while fetching all the latest products.', error:error});
            }
        }else if(qCategory){
            try {
                const products = await Product.find({productCategory:{ $in: [qCategory]}}).sort({createdAt: -1});
                if(!products) return res.status(404).json('No products found.');
                res.status(200).json({message:'Following products have been fetched: ',products:products});
            } catch (error) {
                logger.error({message:'An error occured while fetching the products by category.',error:error});
                res.status(500).json({message:'An error occured while fetching the products by category..', error:error});
            }
        }
    } catch (error) {
        logger.error({message:'An error occured while fetching the products.',error:error});
        res.status(500).json({message:'An error occured while fetching the products.', error:error});
    }
};


module.exports = {
    getProducts,
    getProductsByCategory,
    addProduct,
    deleteProduct,
    updateProduct,
    searchProducts
};