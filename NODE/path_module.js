const path = require("path"); //require

// console.log(__dirname);
// console.log(__filename);


// School Management
// folders/students/data.txt

const filepath = path.join("School Management", "folders", "students", "data.txt");
console.log(filepath);

const parseData = path.parse(filepath);
const resolvedPath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

console.log({parseData, resolvedPath, extname, basename, dirname, separator: path.sep });
