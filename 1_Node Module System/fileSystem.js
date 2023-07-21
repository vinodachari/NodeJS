const fs = require("fs");

// let fileContent = fs.readFileSync("file1.txt");

// console.log(" " + fileContent);

// //write in a file

// // fs.writeFileSync("text2.txt", "This is a file 2"); // Add a file

// fs.writeFileSync("file2.txt", "This is a file 2");

// console.log("file has been written");

// // append in a file

// fs.appendFileSync("file.3.txt", "This ia s file 3");

// console.log("file has been updated");

// // Delete a file

// fs.unlinkSync("file3.txt");

// console.log("File has bee deleted");

//  ==> ****  FS WITH DIRECTORIES **** <==

// 1. Create a adirectory

// fs.mkdirSync("My Directory");

// 2. check the content in the directory

let folderPath = "D:\\Node.js\\1_Node Module System\\My Directory";

let folderContent = fs.readdirSync(folderPath);

// console.log("Folder Content", folderContent);

// // 3. check the dir exists or not

// let doesExist = fs.existsSync("My Directory");

// console.log(doesExist);

// 4. Remove a dir

fs.rmdirSync("My Directory");
