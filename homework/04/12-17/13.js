function doIt() {
  console.log(this);
}
// doIt();

// Create a copy of the doIt() function so that
// the keyword thisis replaced with obj
obj = { key: "value" };
let x = doIt.bind(obj);
x();
