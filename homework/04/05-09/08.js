class Person {
  constructor(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
  }
}

let karen = new Person("karen", "manager");
console.log(karen);
var obj = Person("jack", "smith");
console.log(obj); //this will throw an type error when 'new' keyword is forgotten

//- - - - - - - - -/
// THIS IS OLDER VERSION
// ("use strict");

// function _defineProperties(target, props) {
//   for (var i = 0; i < props.length; i++) {
//     var descriptor = props[i];
//     descriptor.enumerable = descriptor.enumerable || false;
//     descriptor.configurable = true;
//     if ("value" in descriptor) descriptor.writable = true;
//     Object.defineProperty(target, descriptor.key, descriptor);
//   }
// }

// function _createClass(Constructor, protoProps, staticProps) {
//   if (protoProps) _defineProperties(Constructor.prototype, protoProps);
//   if (staticProps) _defineProperties(Constructor, staticProps);
//   Object.defineProperty(Constructor, "prototype", { writable: false });
//   return Constructor;
// }

/*HERE IS THE INSTANCE CHECKING */
// function _classCallCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError("Cannot call a class as a function");
//   }
// }
// THIS IS CREATING THE FUNCTION
// var Person = /*#__PURE__*/ _createClass(function Person(fname, lname) {
//   _classCallCheck(this, Person);

//   this.firstname = fname;
//   this.lastname = lname;
// });

// var karen = new Person("karen", "manager");
// console.log(karen);
// var obj = Person("jack", "smith");
// console.log(obj); //this will throw an type error when 'new' keyword is forgotten
