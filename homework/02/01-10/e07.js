// console.log(repeat("moi")); // outputs "moi"
// console.log(repeat("moi", 4)); // outputs "moimoimoimoi"

//Implement the repeat - function. Use default argument. Do not use String repeat in your solution.

// default argument 'times = 1' -> if there's no second argument given, then the default will be 1
function repeat(str, times = 1) {
  let returnStr = "";
  for (let i = 0; i < times; i++) {
    returnStr += str;
  }
  return returnStr;
}

console.log(repeat("hel")); // times = 1
console.log(repeat("hel'o", 4));
