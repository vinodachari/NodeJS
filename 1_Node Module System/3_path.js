const path = require("path");

let extract = path.extname("D:Node.js\\1_Node Module System\\file1.txt");
let baseName = path.basename("D:Node.js\\1_Node Module System\\file1.txt");

console.log(extract);

console.log(baseName);

console.log(__filename);

console.log(__dirname);
