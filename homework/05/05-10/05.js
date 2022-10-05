function Person(name) {
  this.name = name;
  // this.sayHello = function () {
  //   console.log("hello from " + this.name);
  // };
}

// console.log(Object.getPrototypeOf(jack) === Person.prototype);
// console.log(Object.getPrototypeOf(tina) === Person.prototype);

Person.prototype.sayHello = function () {
  console.log("hello from " + this.name);
};
Person.prototype.drinkBeer = function () {
  console.log(this.name + " drinks beer");
};
let jack = new Person("jack");
let tina = new Person("tina");
jack.sayHello();
tina.sayHello();
// tina.drinkBeer();
// jack.drinkBeer();
