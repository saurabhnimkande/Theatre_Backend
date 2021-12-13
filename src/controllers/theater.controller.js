const express = require('express');

const router =express.Router();

const Theater= require("../models/theater.model")

router.post("", async (req, res) => {
    try {
        const theater = await Theater.create(req.body);

        res.status(201).send(theater);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
})

router.get("", async (req, res) => {
    try {
        const theaters = await Theater.find().lean().exec();

        res.status(201).send(theaters);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
})


module.exports = router;