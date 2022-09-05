let process = require("process");
// slice(2) method creates copy a new array and also omits the first two elements of the array
// first element is is 'node' and the second is the PATH of the script
let argsCLI = process.argv.slice(2);
for (let i of argsCLI) {
  console.log(i);
} // on the console every word is on new line
