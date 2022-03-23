const fs = require("fs")

// fs.appendFile()
// fs.writeFile()

fs.writeFile("demoWrite.txt",
"Hi Backend world!!!",
(error)=>{
    if(error){ console.log(error)}
    console.log("Added text to file.")
})

// fs.writeFileSync()
// fs.appendFileSync()