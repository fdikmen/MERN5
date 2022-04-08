var MovieModel = require('../models/movieModel')


module.exports.getTop10 = function (req,res,next) {
    MovieModel.find().limit(10).sort({imdb_score:-1})
                .then((movie)=>{res.json(movie)})
                .catch((err)=>{next({message:'The movie was not found.',status:99})})              

}

module.exports.getBetweenYear = function (req,res,next) {
    const {startYear,endYear} = req.params
    //greater than or equal & less than or equal
        MovieModel.find({year:{"$gte":parseInt(startYear),"$lte":parseInt(endYear)}})
                    .then((movie)=>{res.json(movie)})
                    .catch((err)=>{next({message:'The movie was not found.',status:99})})              
    
    }

    module.exports.getById = function (req,res,next) {
        //res.json("Respond with a resouce MOVIE List.")
        MovieModel.findById(req.params.movieId)
                    .then((movie)=>{res.json(movie)})
                    // .catch((err)=>{res.json(err)})
                    .catch((err)=>{next({message:'The movie was not found.',status:99})})              
    
    }

    module.exports.add=function (req,res,next) {

        //Mapping model with scheme(table)
        /*const newMovie = new MovieModel({
            title:req.body.title,
            imdb_score :req.body.imdb_score,
            category:req.body.category,
            country:req.body.country,
            year:req.body.year
        })*/
        //Mapping model with scheme(table)
        const newMovie = new MovieModel(req.body)
    
        newMovie.save()
                    .then((movie)=>{res.json(movie)})
                    .catch((err)=>{res.json(err)})
        
    }

    module.exports.update = function (req,res,next) {
        MovieModel.findByIdAndUpdate(req.params.movieId,req.body,{new:true})
                    .then((movie)=>{res.json(movie)})
                    .catch((err)=>{next({message:'The movie was not found.',status:99})})              
    
    }

    module.exports.delete = function (req,res,next) {
        MovieModel.findByIdAndRemove(req.params.movieId)
                    .then((movie)=>{res.json(movie)})
                    .catch((err)=>{next({message:'The movie was not found.',status:99})})              
    
    }

    module.exports.getAll = function (req,res,next) {
        //res.json("Respond with a resouce MOVIE List.")
        MovieModel.find()
                    .then((movieList)=>{res.json(movieList)})
                    .catch((err)=>{res.json(err)})
    
    }