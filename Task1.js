//1:create a folder named it MyFolder
//2:create a file in it named ServiceWorkerContainer.txt and add data into it.ServiceWorkerContainer
//3:add more data into the file at the end of the existing data.
//4:read the data without getting the buffer data at first.
//file encoding.
//5:Rename the file name to MyFolder2r.txt
//6:now delete both the file and the folder .


 const fs=require('fs');
 //fs.mkdirSync('MyFolder');

 //fs.writeFileSync('MyFolder/sweta.txt','my name is sweta karn');

//fs.appendFileSync('MyFolder/sweta.txt','my name is sweta karn');
 //const data=fs.readFileSync('MyFolder/sweta.txt', "utf8");
 //console.log(data);

 //fs.renameSync('MyFolder/sweta.txt',"MyFolder/Myfile.txt");

//fs.unlinkSync('MyFolder/Myfile.txt');
fs.rmdirSync("MyFolder");