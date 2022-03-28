const fs = require("fs")
const myFile = "video.mp4"

var path = require("path")

//Get File Extension
var myFileExt = path.extname(myFile)
console.log(myFileExt)


const myReadStream = fs.createReadStream(myFile)

const myWriteStream = fs.createWriteStream("videoNew" + myFileExt)


myReadStream.pipe(myWriteStream)

myWriteStream.on('finish',()=>{
    console.log("Finished writeStream....")
})
