// *******(File System Crud operation Assignment No : 18)*******

// -----Import Node FileSystem Require-----//
const { error } = require('console');
const fs= require('fs');

//(Local Server create) 
const http = require('http');

http.createServer((req,resp)=>{
resp.write("<h1>Assignment No : 18 (Node Js File System Crud Opertion!)</h1>");
resp.end();
}).listen(4005);


//Create Folder
// fs.mkdirSync('crud-folder');

//Create File
fs.writeFileSync('text.txt','This is a simple text file create!'); 

//Read File
const resSync = fs.readFileSync('text.txt', 'utf-8');
console.log(resSync);

//Update File
fs.appendFile('text.txt','And Update File Text (Assignment no - 18 Node Js)',(error)=>{
if(!error)console.log("File Updated Successfully!")
})

//Deleted File
fs.unlinkSync('WorkFile.txt');

//File Update Rename 
fs.rename('text.txt','workFile.txt',(error)=>{
if(!error)console.log("File Name is Updated!")
})



