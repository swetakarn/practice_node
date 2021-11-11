const http = require("http");
const PORT = 8081;
const { uuid } = require('uuidv4');

console.log(uuid(), uuid(), uuid());
const server = http.createServer(requsetHandler);

server.listen(PORT);


//var employeeEmails={"swetakarn477@gmail.com","prinkacronj@gmail.com"]
var employees = [{"name":"sweta", "age":"22","salary":"2000" ,"remarks":"good"}
,{"name":"priyanka", "age":"22","salary":"3000" ,"remarks":"good"}];

/*admincred={
    username="shubham@cronj.com",
    password:"123"
}*/

var tokens = ["dsadsakdsanjk"];

// login request (user and passwords)
// make a random token/ticket (dsadsakdsanjk)  and send it as a response and tell them to pass this token in further request like add employee

// user is now passing the token with the request 
// 
/*function getRouteFromUrl(url){
    console.log(url)
    return(url.split("/")[1].split("?")[0])
}

function getQuery(request){
    var url_parts = url.parse(request.url, true);
    request.query = url_parts.query;

}*/

/*"/add","/update"=level1
"/add/employee"=level2*/

function requsetHandler(req, res){

    /*res.writeHead(200,{'content-Type':'server/json'})
    getQuery(req);*/
    // for get request
   if(req.method == "GET"){
       if(req.url === "/employee"){
        res.end(JSON.stringify(employees))
       }
        else{
            res.end("NO GET API FOUND")
        }
   }
   
//    for post request
   else if(req.method == "POST"){

    if(req.url === "/employee"){
        // TODO : add to employee array
        let completeBuffer = "";
        // read the data
        req.on("data", (bufferData)=>{
            // console.log("buffer", bufferData);
            // console.log("daata", JSON.parse(bufferData.toString()));
            completeBuffer+=bufferData;
        })
        req.on("end", ()=>{
            console.log("daata", JSON.parse(completeBuffer.toString()));
            
            console.log("request has ended");
            
            // need to verify the token
            const tokenFromClient = JSON.parse(completeBuffer.toString()).token;
            let isTokenVerified = false;

            tokens.map(token=>{
                if(token == tokenFromClient){
                    isTokenVerified = true;
                }
            })

            if(isTokenVerified){
                // after reading the data add to array
                employees.push(JSON.parse(completeBuffer.toString()));
                res.end("Added Succesfully");
                // and send successfully added in the response
            }else{
                res.end("Unauthorized, token invalid");
            }
            
        })        
    }
    else{
            res.end("NO POST API FOUND")
    }
   }
}

