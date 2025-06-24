const fs = require("fs/promises");
const path = require("path");

const fileName = "AsyncFile.txt";
const filePath = path.join(__dirname, fileName);


// const filepath1 = __dirname;

// const readFolder = async() => {
//     try {
//         const res = await fs.promises.readdir(filepath1);
//         console.log(res);
//     } catch (error) {
//         console.error(error);
//     }
// }

// readFolder();



//*---------------------------------------------------------------------------------------------------------------------------------------------*
//* fsPromises.writeFile() : Writes data to a file asynchronously. If the file exists, it overwrites the content.
//! syntax: fsPromises.writeFile(path, data, options);
//? path: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Specifies encoding (e.g., 'utf8'), mode, or flags.
//*---------------------------------------------------------------------------------------------------------------------------------------------*


// const writefileExample = async() => {
//     try {
//         const res = await fs.writeFile(
//             filePath,
//             "Hello World By Krushit",
//             "utf8"
//         );
//         console.log("File written successfully");
//     } catch (error) {
//         console.error(error);
//     }
// }

// writefileExample();



//*---------------------------------------------------------------------------------------------------------------------------------------------*
//* fsPromises.readFile() : Reads the contents of a file asynchronously and returns the data as a buffer or string.
//! syntax: fsPromises.readFile(path, options);
//? path: The file path to read.
//? options: Optional. Specifies encoding (e.g., 'utf8') or flag ('r' for reading).
//*---------------------------------------------------------------------------------------------------------------------------------------------*


// const readfileExample = async() => {
//     try {
//         const res = await fs.readFile(filePath, "utf8");
//         console.log(res);
//     } catch (error) {
//         console.error(error);
//     }
// }

// readfileExample();



//*---------------------------------------------------------------------------------------------------------------------------------------------*
//* fsPromises.appendFile() : Appends data to a file. If the file doesn't exist, it is created.
//! syntax: fsPromises.appendFile(path, data, options);
//*---------------------------------------------------------------------------------------------------------------------------------------------*


// const appendfileExample = async() => {
//     try {
//         const res = await fs.appendFile(
//             filePath,
//             "\n Hello World By Krushit (Updated)",
//             "utf8"
//         );
//         console.log("File appended successfully");
//     } catch (error) {
//         console.error(error);
//     }
// }

// appendfileExample();



//*---------------------------------------------------------------------------------------------------------------------------------------------*
//* fsPromises.unlink() : Deletes a file.
//! syntax: fsPromises.unlink(path);
//*---------------------------------------------------------------------------------------------------------------------------------------------*


// const deletefileExample = async() => {
//     try {
//         const res = await fs.unlink(filePath);
//         console.log("File deleted successfully");
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// deletefileExample();