const http=require('http');
const url=require('url');
const fs=require('fs');

//code to create server
const server=http.createServer(function(req,res){
    const urlObject=url.parse(req.url,true);
    const fileName="."+ urlObject.pathname;   //   ./demo2.html

    // used the file system 
    fs.readFile(fileName,function(err,data){

        if(err){
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('data');
        res.end();
    }
    )
});
//code to listen server
server.listen(9000,() => {
    console.log('Server is running...');
});