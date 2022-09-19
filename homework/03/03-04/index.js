var fs = require("fs");
var readline = require("readline-sync");

function doIt() {
  var userInput = readline.question("What is the name of the file? ");
  //ask name for the file -> create the file with that name
  // if no errors, read the file content
  fs.writeFile(`${userInput}.txt`, "helloooo", (err, data) => {
    if (err) {
      return false;
    } else {
      fs.readFile(`${userInput}.txt`, "utf-8", (err, data) => {
        if (err) {
          return false;
        } else {
          console.log(`filename: ${userInput}.txt`);
          console.log(data);
        }
      });
    }
  });
}

doIt();
