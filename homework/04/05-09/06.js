function Person(fname, lname) {
  this.firstname = fname;
  this.lastname = lname;
  console.log(this instanceof Person); //checks if the 'this' keyword means the Person constructor or the global
}

let jack = new Person("jack", "smith");
let ellen = new Person("ellen", "adams");
let karen = new Person("karen", "manager");
console.log(jack);
console.log(ellen);
console.log(karen);
console.log("\n" + "This is without the 'new' keyword!!");
var obj = Person("jack", "smith"); // this doesn't have 'new' keyword, so this doesn't have the constructor
console.log(obj); // undefined
