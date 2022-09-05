function trimWhiteSpaces(userStr) {
  let trimmedStr = "";
  for (let i = 0; i < userStr.length; i++) {
    if (userStr.charAt(i) !== " ") {
      trimmedStr += userStr.charAt(i);
    }
  }
  return trimmedStr;
}

function isPalindrome(checkUserStr) {
  let backwards = "";
  // check str backwards
  for (let i = checkUserStr.length; i >= 0; i--) {
    backwards += checkUserStr.charAt(i);
  }
  // compare these two strings
  // is not case sensitive
  // trim() removes spaces from both sides of the string
  if (checkUserStr.toUpperCase() === backwards.toUpperCase()) {
    console.log("Congrats! You're given string is a palindrome!");
  } else {
    console.log("Sorry, you're given string is not a palindrome.");
  }
}

let readLineSync = require("readLine-sync");
let userInput = readLineSync.question("Please give any string: ");
let strNoWhiteSpaces = trimWhiteSpaces(userInput); // trims the str first
isPalindrome(strNoWhiteSpaces);
