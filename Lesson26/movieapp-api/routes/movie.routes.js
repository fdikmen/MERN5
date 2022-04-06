var express = require("express")
var router = express.Router();

var MovieModel = require('../models/Movie')

//GET Movies List
router.get('/',function (req,res,next) {
    res.send("Respond with a resoucer MOVIE List.")
})

//POST
router.post('/',function (req,res) {

    const newMovie = new MovieModel({
        title:req.body.title,
        imdb_score :req.body.imdb_score,
        category:req.body.category,
        country:req.body.country,
        year:req.body.year
    })

    newMovie.save((err,data)=>{
        if (err) {res.json(err)}
        res.json(data)
    })
    
})

module.exports = router
