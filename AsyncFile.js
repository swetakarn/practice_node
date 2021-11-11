const fs =require("fs");
/*fs.writeFile('read.txt',"today was fine.",
 (err) => {
     console.log('file is created');
     console.log(err);
 }
);*/

/*fs.appendFile('read.txt',"i am a good girl" ,
(err) => {
    console.log("i am not bad ");
});*/

fs.readFile('read.txt','utf-8',
(err,data) => {
    console.log(data);
});
