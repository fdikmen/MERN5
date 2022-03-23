const fs = require("fs")

fs.readFile('demo.txt',
(err,data)=>{
    if (err) {
        console.log("Error :",err)
    } 
        console.log(data.toString())
        console.log("Read file finish...")
   
}
)

// fs.readFileSync('demo.txt',
// (err,data)=>{
//     if (err) {
//         console.log("Error :",err)
//     } 
//         console.log(data.toString())
//         console.log("Read file finish...")
   
// }
// )