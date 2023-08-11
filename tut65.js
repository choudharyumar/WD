// Synchronus or blocking:
// --line by line code execution

// Aynchronus or non-blocking:
let fs =require("fs")
fs.readFile("umar2.txt","utf-8",(err,data)=>{
    console.log(data)//---this data is shown after the "this is the message" because we use call back functions
})
console.log("this is the message")
