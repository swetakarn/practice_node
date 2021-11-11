const fs=require("fs");
const http =require("http");
const server=http.createServer((req,res) => {
    if(req.url=="/"){
        res.end("hello from  home side");
    }
     else if(req.url=="/about"){
        res.end("hello from  about side");
    }
    else if(req.url=="/userapi"){
        fs.readFile(`${__dirname}/user_api/user_api.json`,"utf-8",(err,data)
        => {console.log(data)});

        res.end("hello from  userapi  side");
    }
    else{
        res.writeHead(404);
        res.end("<h2>page does not exist<h2>");
    }

});
const PORT=process.env.PORT||8080

  server.listen(PORT,() => console.log('server running on http://localhost:8080'))
 