let process = require("process");
// first element is is 'node' and the second is the PATH of the script
// will only record two elements, otherwise undefined
let argsCLI = process.argv.slice(2, 4);
let arr = [];
for (let i of argsCLI) {
  arr.push(Number(i));
}
console.log(arr[0] + arr[1]); // sum of the two integers
