function Person(fname, lname) {
  if (this instanceof Person) {
    this.firstname = fname;
    this.lastname = lname;
  } else {
    throw new TypeError("Cannot call a class as a function");
  }
}
let karen = new Person("karen", "manager");
console.log(karen);
var obj = Person("jack", "smith");
console.log(obj);
