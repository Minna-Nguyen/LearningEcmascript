// Create a simple function `abs` that calculates the absolute value of given number:
// console.log( abs(-7) ) // outputs 7
// console.log( abs(7) )  // outputs 7

function abs(a) {
  if (a < 0) {
    //negative to positive
    return a * -1;
  } else {
    //positive int
    return a;
  }
}

console.log(abs(-190));
console.log(abs(7));
