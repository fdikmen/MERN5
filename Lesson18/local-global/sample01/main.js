var slugify = require('slugify')


var result1 = slugify('MERN STACK LESSONS') 
console.log("Result 01 : ",result1)

var mail = require('mail').Mail({
    host: 'smtp.gmail.com',
    username: 'me@gmail.com',
    password: '**password**'
  });