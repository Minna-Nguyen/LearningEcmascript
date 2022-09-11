function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log("Done with if-then-else constructor:");
console.log(max(4, 6));
console.log(`
Now done with ternary operator: `);
//the same using ternary operator
const maxBetter = (a, b) => {
  return a > b ? a : b;
};
console.log(maxBetter(4, 0));
