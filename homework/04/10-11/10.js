// function doIt1() {
//   console.log("hello");
// }
// // doIt1();
// let doIt2 = new Function("", "console.log('hello')");
// doIt2.call();

function doIt(a, b) {
  console.log(a + b);
}
// doIt(5, 5);
// doIt.call({}, 5, 5);

/*this -> global */
function doIt2(a, b) {
  console.log(this);
}
// doIt2(5, 5);
doIt2.call({}, 5, 5);

// function doIt(a, b) {
//   console.log(this);
// }
let object = { key: "value" };
// doIt.call(object, 5, 5); // first argument 'object' will output the data stored in 'object' variable
