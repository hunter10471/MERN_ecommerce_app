const User = require('../models/user');
const cryptojs = require('crypto-js');
const logger = require('../utils/logger');


const getUsers = async(req,res) =>{
    try {
        const qId = req.query.id;
        if(qId){
            const user = await User.findById(qId);
            if(!user) return res.status(404).json('User not found.');
            const {password, ...others} = user._doc //eslint-disable-line
            res.status(200).json({ message:'User found.',user:others});
        }else{
            try {
                const users = await User.find().sort({_id: -1});
                if(!users) return res.status(404).json('Could not find any users.');
                const usersArray = Object.values(users);
                res.status(200).json({message:'Users have been fetched successfully: ',users:usersArray.map(el=>{
                    const {password, ...others} = el._doc; //eslint-disable-line
                    return others;
                })});
            } catch (error) {
                console.log('Error fetching all users');
                res.status(500).json({message:'Could not fetch all users.',error:error});
            }
        }
    }catch(error){
        logger.error({message:'User could not be fetched.',error:error});
        res.status(500).json({message:'User could not be fetched.',error:error});
    }
};

const getUserPublic = async(req,res) =>{
    try {
        const qUsername = req.query.username;
        const qEmail= req.query.email;
        const user = await User.findOne({$or:[{username:qUsername},{email:qEmail}]});
        if(!user) return res.status(404).json('User not found.');
        res.status(200).json({ message:'User found.',user: true});

    }catch(error){
        logger.error({message:'User could not be fetched.',error:error});
        res.status(500).json({message:'User could not be fetched.',error:error});
        res.send('error');
    }
};


const updateUser = async(req,res) =>{
    if(req.body.password){
        req.body.password = cryptojs.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET_KEY).toString();
    }
    try {
        const existingUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        const updatedInfo = Object.entries(req.body);
        const updatedUser = Object.entries(existingUser._doc);
        const updatedFields = Object.fromEntries(updatedInfo.filter(el => updatedUser.map(el2 =>{
            return el.toString() === el2.toString();
        })));
        res.status(200).json({message:'User has been updated successfully', user: updatedFields });
    } catch (error) {
        logger.error({message:'Could not update user.',error:error});
        res.status(400).json({message:'User could not be updated.',error:error});
    }
};


const deleteUser = async(req,res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json('User could not be deleted because the user does not exists.');
        const {password, ...others} = user._doc; //eslint-disable-line
        res.status(200).json({message:'User with the following has been deleted successfuly.',username: others.username, userId: others._id});
    } catch (error) {
        logger.error({message:'An error occured while deleting the user.',error:error});
        res.status(500).json({message:'An error occured while deleting the user.',error:error});
    }
};

module.exports = {getUsers, updateUser, deleteUser, getUserPublic};