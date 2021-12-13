const express = require('express');

const router=express.Router();

const upload= require('../middlewares/upload');

const User= require('../models/user.model');

const jwt = require('jsonwebtoken');

const newToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

router.use("", upload.single("profile_photo_url"), async (req, res) => {
    try {

        const user= await User.findOne({email:req.body.email}).lean().exec(); 

        if(user) {
            return res.status(400).json({message:"Please provide different email address"})
        }

        const new_user= await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            profile_photo_url:req.file.path,
            roles:req.body.roles
        });

        const token = newToken(user);

        res.status(201).json({ new_user, token });

    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
});


module.exports = router;