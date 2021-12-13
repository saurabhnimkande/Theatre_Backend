const express = require('express');

const router =express.Router();

const authenticate = require("../middlewares/authenticate");

const Movie= require("../models/movie.model");

router.post("",authenticate, async (req, res) =>{
    try {
        const movie = await Movie.create(req.body);
        res.status(200).send(movie);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
})

router.get("", async (req, res) =>{
    try {
        const movies= await Movie.find().lean().exec();
        res.status(200).send(movies);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
})

router.get("/actor", async (req, res) =>{
    try {
        const movies= await Movie.find({"actor 1": {$in : movies.actors}}).lean().exec();
        res.status(200).send(movies);
    } catch (err) {
        res.status(500).json({message:err.message,status:"Failed"});
    }
})


module.exports= router;