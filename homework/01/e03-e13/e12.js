let readLineSync = require("readLine-sync");
let userInput = readLineSync.question("Please give any string: ");

function isPalindrome(userStr) {
  let forwards = "";
  let backwards = "";
  // check str forwards
  for (let i = 0; i < userStr.length; i++) {
    forwards += userStr.charAt(i);
  }
  // check str backwards
  for (let i = userStr.length; i >= 0; i--) {
    backwards += userStr.charAt(i);
  }
  // compare these two strings
  // is not case sensitive
  // trim() removes spaces from both sides of the string
  if (forwards.toUpperCase().trim() === backwards.toUpperCase().trim()) {
    console.log("Congrats! You're given string is a palindrome!");
  } else {
    console.log("Sorry, you're given string is not a palindrome.");
  }
}

isPalindrome(userInput);
