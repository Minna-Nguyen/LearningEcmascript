function doIt(a) {
  function sayHello() {
    if (a === false) {
      console.log("helloo");
    } else {
      console.log("world");
    }
  }
  return sayHello;
}
doIt(false)(); // hello
doIt(true)(); // world
