const fs = require('fs');

// create new file(C)
fs.writeFile('info.txt', 'Hi my github id is : Bharat-2000. Let us connect there', () => {
    console.log('Succesfully Generated');
});


//update (U)
fs.appendFile('info.txt', 'Currently i am working on a full stack mern project and learning about node.js and asynchronous json files', () => {
    console.log('Updation Successfull');
});

// read data(R)
fs.readFile('info.txt', 'utf-8' , (e, data) => {
    console.log(data);
});


// delete file(D)
fs.unlink('info.txt', () => {
    console.log('Deletion Successfull');
});
