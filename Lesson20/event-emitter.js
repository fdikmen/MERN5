// import -> const customName = require("packname")
//call event lib/package/module
const events = require('events')
//call EvenEmitter func.
const eventEmitter = new events.EventEmitter()

//Create a Event
eventEmitter.on("sayHi",(user)=>{console.log(`Hi nodeJS.... ${user.name} - ${user.surname}`)})

//Create a Event
eventEmitter.once('sumNumber',()=>{console.log("Sum Numbers...")})

//Trigger a Event
const data = "Tommy"
const data2 = {name:"Tommy",surname:"Ema"}
eventEmitter.emit('sayHi',data2)
//eventEmitter.emit('sayHi')
//eventEmitter.emit('sayHi')

eventEmitter.emit('sumNumber')
eventEmitter.emit("sumNumber")
eventEmitter.emit('sumNumber')
eventEmitter.emit("sumNumber")

//Trigger e Event per 5min
// setInterval(() => {
//     eventEmitter.emit('sayHi')
// }, 5000);