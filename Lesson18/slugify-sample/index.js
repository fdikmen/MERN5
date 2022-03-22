//import slugify from 'slugify'
var slugify = require('slugify')


var result1 = slugify('MERN STACK LESSONS') 
console.log("Result 01 : ",result1)

var result2 = slugify('MERN STACK LESSONS','*') 
console.log("Result 02 : ",result2)