const express = require('express')
const router = express.Router()

const isAuth = require('../helpers/isAuth')
router.get('/about',isAuth, (req, res,next) => {
    const user = true;
    if (user) {
        res.send('Hello World! About - GET')
    } else {
        return next({status:404,message:'This user was not found!!!'})
    }
})
router.post('/about', (req, res) => res.send('Hello World! About - POST'))

module.exports = router;