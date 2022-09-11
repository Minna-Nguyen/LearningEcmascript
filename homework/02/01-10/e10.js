//Implement the doIt function. Use arguments variable inside of the function.

function doIt() {
  // arguments is an Array object
  // also if use for of loop, it will output undefined
  let str = "";
  for (let i in arguments) {
    str += arguments[i];
  }
  console.log(str);
}

doIt("a"); // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc
