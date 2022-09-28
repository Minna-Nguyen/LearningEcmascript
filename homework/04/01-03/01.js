function doIt() {
  function Hello() {
    console.log("hello world");
  }
  return Hello;
}

let x = doIt();
x();
