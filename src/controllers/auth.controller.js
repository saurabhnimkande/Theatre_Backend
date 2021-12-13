require("dotenv").config();
const User= require('../models/user.model');
const jwt = require('jsonwebtoken');

const newToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
  };

//validate / auth  / authorization

const register= async (req, res) => {


}


const login =async (req, res) => {

    try {

        const user= await User.findOne({email:req.body.email});

        if(!user) {
            return res.status(400).json({message:"password or email is not valid"})
        }

        //check password 

        const match = await user.checkPassword(req.body.password);

        if (!match) {
            return res.status(400).json({message:"password or email not valid"})
        }
    
        const token = newToken(user);

        res.status(201).json({ user, token });

    }  catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
}



module.exports = {login , register}