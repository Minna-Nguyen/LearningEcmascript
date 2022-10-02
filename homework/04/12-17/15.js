let user = {
  name: "Karen",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
user.sayHello(); //olio.funktio

//testing
// let f = user.sayHello;
// f(); //Hello undefined --> this is global

// setTimeout(user.sayHello, 1000); //delayed call

// sayHello() is a normal function.
// Inside it there's another funktion to be called.
// function sayHello() {
//   user.sayHello(); // olio.funktio
// }

// setTimeout(sayHello, 1000); //Hello, Karen
setTimeout(() => user.sayHello(), 1000);

user.sayHello = function () {
  console.log("does it work");
}; // this will overwrite the other console.log in the user object
