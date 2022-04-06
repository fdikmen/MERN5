var express = require("express")
var router = express.Router();

var MovieModel = require('../models/Movie')

//GET A Movie (/api/movies/:movie_id)
router.get('/:movieId',function (req,res,next) {
    //res.json("Respond with a resouce MOVIE List.")
    MovieModel.findById(req.params.movieId)
                .then((movie)=>{res.json(movie)})
                // .catch((err)=>{res.json(err)})
                .catch((err)=>{next({message:'The movie was not found.',status:99})})              

})

//GET Movies List
router.get('/',function (req,res,next) {
    //res.json("Respond with a resouce MOVIE List.")
    MovieModel.find()
                .then((movieList)=>{res.json(movieList)})
                .catch((err)=>{res.json(err)})

})

//POST Add Movie
/*router.post('/',function (req,res) {

    //Mapping model with scheme(table)
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
    
})*/


//POST Add Movie (ALTERNATIVE)
router.post('/',function (req,res,next) {

    //Mapping model with scheme(table)
    const newMovie = new MovieModel(req.body)

    newMovie.save()
                .then((movie)=>{res.json(movie)})
                .catch((err)=>{res.json(err)})
    
})

//PUT Update Movie
router.put('/:movieId',function (req,res,next) {
    MovieModel.findByIdAndUpdate(req.params.movieId,req.body,{new:true})
                .then((movie)=>{res.json(movie)})
                .catch((err)=>{next({message:'The movie was not found.',status:99})})              

})


//DELETE A Movie (/api/movies/:movie_id)
router.delete('/:movieId',function (req,res,next) {
    MovieModel.findByIdAndRemove(req.params.movieId)
                .then((movie)=>{res.json(movie)})
                .catch((err)=>{next({message:'The movie was not found.',status:99})})              

})

module.exports = router
