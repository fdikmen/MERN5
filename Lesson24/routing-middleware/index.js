//Created by "node-express" snippet
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug')
app.use(express.static('public'))
app.use(express.static('public-2'))

const isAuth = require('./helpers/isAuth')
//app.use('/api/about',isAuth)
//app.use(isAuth)

const user = require('./routers/user')
const about = require('./routers/about')
app.use('/',user)
app.use('/',about)

const other = require('./routers/other')
app.use('/api/',other) //With prefix

//Error Handling Middleware
app.use((err,req,res,next)=>{
    res.status(err.status)
    res.render('error.pug',{message:err.message,status:err.status})
})






app.listen(port, () => console.log(`Example app listening on port ${port}!`))