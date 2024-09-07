// file read or write

// the node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require("fs");

// synchronous file call
fs.writeFileSync('./test.txt', "Hello World"); // creates a file named test.txt with the content Hello World

// asynchronous file call
fs.writeFile('./test.txt', "Hello World Async", (err) => {}); //overwrites the content of test.txt with Hello World Async

// the synchronous version of the read file function is fs.readFileSync. It takes two arguments: the file path and the encoding. It returns the content of the file.
const result = fs.readFileSync('./contacts.txt', 'utf8'); // returns the content of test.txt
console.log(result); // Hello World Async

// the asynchronous version of the read file function is fs.readFile. It takes three arguments: the file path, the encoding, and a callback function that will be called with the file content.
// it doesnot return the result directly, instead it calls the callback function with the result
fs.readFile('./contacts.txt', 'utf8', (err, data) => {
    console.log(data); // Hello World Async
});

fs.appendFileSync('./contacts.txt', "\nShrey: +915467891235"); // appends Hello World to the content of test.txt

fs.cpSync('./contacts.txt', './contacts-copy.txt'); // copies the content of test.txt to test-copy.txt

fs.unlinkSync('./contacts-copy.txt'); // deletes the file test.txt

console.log(fs.statSync('./contacts.txt')); // returns the stats of the file test.txt

