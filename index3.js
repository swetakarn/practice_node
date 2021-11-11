var http=require('http');//http header
//const { listenerCount } = require('process');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('hello world');
});listen(8080);
