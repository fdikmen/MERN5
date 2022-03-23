const fs = require("fs")


fs.unlink("demoWrite.txt",(err)=>
{
    if (err) {
       // console.log(err)
        throw err
    }
    console.log("File was removed.")
    
})