//Created by "node-express" snippet
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug')

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.render('index',{name:"Gunnar",phone:"438.652.0833",title:"Lead Brand Strategist"}))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))