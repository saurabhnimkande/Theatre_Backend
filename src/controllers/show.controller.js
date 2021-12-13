const express = require('express');

const router =express.Router();

const Show= require('../models/show.model')

const Theater = require('../models/theater.model')

// router.get("", async (req, res) => {
//     try {
//         const shows= await Show.find().lean().exec();
//         res.status(200).send(shows);
//     } catch (err) {
//         res.status(500).json({message:err.message,status:"Failed"});
//     }
// })

router.get("", async (req, res) => {
    try {
        const query= req.query;
        console.log('query:', query);
        const shows= await Show.find().populate("movie").lean().exec();
        res.status(200).send(shows);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
})

router.get("/pune", async (req, res) => {
    try {
        const shows= await Theater.find({location:"Pune"}).lean().exec();
        res.status(200).send(shows);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
})

router.post("/", async (req, res) => {
    try {
        const show= await Show.create(req.body);
        res.status(201).send(show);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
    
})


module.exports = router;