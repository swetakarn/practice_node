const http=require("http");
const server=http.createServer((req,res) =>{
    res.end("hello world");

})
server.listen((8000,"127.0.0.1",()  =>{
    console.log("listening to the port no 8080");
}));