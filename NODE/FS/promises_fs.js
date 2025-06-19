const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

//*---------------------------------------------------------------------------------------------------------------------------------------------*
// Why .then() and .catch()?
// .then() ensures clear chaining of multiple asynchronous operations.
// .catch() centralizes error handling, making it easy to debug and manage failures.
//*---------------------------------------------------------------------------------------------------------------------------------------------*

// const file = __dirname

// fs.promises
//     .readdir(file)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error(err);
//     });


//*---------------------------------------------------------------------------------------------------------------------------------------------*
//* Create (Write a File): fs.promises.writeFile
//* Creates or overwrites a file with specified content.
//* The writeFile() method writes data to a file asynchronously.
//* If the file does not exist, it is created.
//* If it exists, its content is replaced.

//! syntax: fs.promises.writeFile(path, data, options).then().catch();
//? path: Path to the file.
//? data: Content to write.
//? options: Encoding ('utf8'), flags, etc. (optional).
//*---------------------------------------------------------------------------------------------------------------------------------------------*

fs.promises
    .writeFile(
        filePath,
        "Hello World By Krushit",
        "utf8"
    )
    .then(() => {
        console.log("File written successfully");
    })
    .catch((err) => {
        console.error(err);
    });