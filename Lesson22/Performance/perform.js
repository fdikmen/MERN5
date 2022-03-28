const fs = require('fs')
const http = require('http')
const myServer = http.createServer()
const myFile = "GitHubLesson.mp4"

myServer.on('request',(req,res)=>{

    /*fs.readFile(myFile,(err,data)=>{
        if(err) throw err;
        res.end(data)
    })*/
    const myReadStream = fs.createReadStream(myFile)
    myReadStream.pipe(res)

})


myServer.listen(5000)