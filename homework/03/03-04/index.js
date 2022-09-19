var fs = require("fs");
var readline = require("readline-sync");

let userInput = readline.question("What is the name of the file? ");
console.log(`File name: ${userInput}.txt`);
// asking user name for the file. The file has already content "hello worldsss"
let createFile = fs.writeFileSync(
  `${userInput}.txt`,
  "hello worldsss",
  (err, data) => console.log(data)
);

let readFile = fs.readFile(`${userInput}.txt`, "utf-8", (err, data) =>
  console.log(data)
);
