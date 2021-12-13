const express = require('express');

const router =express.Router();

const Screen= require("../models/screen.model")
router.post("", async (req, res) => {
    try {
        const screen = await Screen.create(req.body)
        res.status(201).send(screen);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
    
})

router.get("", async (req, res) => {
    try {
        const screens = await Screen.find().lean().exec();
        res.status(201).send(screens);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
    
})



module.exports= router;