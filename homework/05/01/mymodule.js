function printName() {
  console.log(`Your name: "KAREN"`);
}

function sum(a, b) {
  return a + b;
}
// export these functions as an object
let obj = { printName: printName, sum: sum };

module.exports = obj;
