function doIt() {
  console.log("hello");
}
console.log(typeof doIt);
console.log(doIt instanceof Function);

/*
 line 4 will output 'function' 
 line 5 it will output 'true', which means that it's also an object
 made from Function constructor
*/
