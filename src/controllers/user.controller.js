const express = require('express');
const User = require('../models/user.model')
const router =express.Router();

router.get("",async (req,res) => {
    try {
        const users = await User.find({}).lean().exec();

        res.status(200).send(users);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
    
})


module.exports = router;
