// require() loads this module called "readLine-sync"
let userInput = require("readline-sync");
// prints the question then waits for the user input
let userName = userInput.question("Hello, what is your name? ");
console.log("Hi " + userName + "!");
// e04 starts, repeating string N times
let repeatTimes = userInput.question("How many times? ");
console.log(userName.repeat(repeatTimes));
