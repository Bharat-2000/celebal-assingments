const fs = require("fs");
const path = require("path");
const http = require("http");


// ----------------------------------------------------------------------------

// fs

// create new file(C)
fs.writeFileSync('info.txt', 'Hi my github id is : Bharat-2000. Let us connect there.');


//update (U)
fs.appendFileSync('info.txt', 'Currently i am working on a full stack mern project and learning about node.js and synchronous json files');

// read data(R)
const readData = fs.readFileSync('info.txt');
console.log(readData);
// Read data as itis:
const fileData = readData.toString();
console.log(fileData);

// delete file(D)
fs.unlinkSync('info.txt');


//CRUD operation on file (File Handling) Done



// ---------------------------------------------------------------------------------------

// showing data using http on local host
 
const server = http.createServer( (req, res) => {
    res.write(readData);
    res.end();
});


server.listen(3600, () => {
    console.log("server listening at port 3600");
});



// ------------------------------------------------------------------------------------
//different ways to give path 


const filePath = path.resolve('test.txt');
console.log(filePath);

const dirName = path.dirname(filePath);
console.log(dirname);

const p = `dirname /${filePath}`
//or instead find file path using join path
const joinPath = path.join('admin' , 'txt.txt');
console.log(joinPath)

