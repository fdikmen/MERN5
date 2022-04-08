var express = require("express")
var router = express.Router();
const movieController = require("../controllers/movieController")

//GET Top 10 Movies (/api/movies/top10)
router.get('/top10',movieController.getTop10)
//GET Between (/api/movies/:startYear/:endYear)
router.get('/:startYear/:endYear',movieController.getBetweenYear)
//GET A Movie (/api/movies/:movie_id)
router.get('/:movieId',movieController.getById)
//GET Movies List
router.get('/',movieController.getAll)
//POST Add Movie (ALTERNATIVE)
router.post('/',movieController.add)
//PUT Update Movie
router.put('/:movieId',movieController.update)
//DELETE A Movie (/api/movies/:movie_id)
router.delete('/:movieId',movieController.delete)

module.exports = router
