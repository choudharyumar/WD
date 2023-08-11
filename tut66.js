const  http =require("http")
const fs=require("fs")
const filecontent=fs.readFileSync("tut21.html")
// now we make a server
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    res.end(filecontent)
})
// make port of server
server.listen(80,"127.0.0.1",()=>{
    console.log("listening on the port 80")
})