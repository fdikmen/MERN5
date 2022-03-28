const fs = require('fs')
const http = require('http')

const myServer = http.createServer((request,response)=>{
    console.log("Yes, its a request!")
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    fs.readFile('index.html',(err,data)=>{
        if (err) {
            throw err;
        }
        response.end(data)
    })

})

myServer.listen(4000)