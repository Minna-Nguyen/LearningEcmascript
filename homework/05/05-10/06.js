// drinkBeer() and sayHello() is only once in memory, will output undefined if there is no object with name

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   drinkBeer() {
//     console.log(this.name + " drinks beer");
//   }
//   sayHello() {
//     console.log("hello from " + this.name);
//   }
// }

//this.drinkBeer function is now two times in memory
class Person {
  constructor(name) {
    this.name = name;
    this.drinkBeer = function () {
      console.log(this.name + " drinks beer");
    };
  }
  sayHello() {
    console.log("hello from " + this.name);
  }
}
let jack = new Person("jack");
let tina = new Person("tina");
jack.sayHello();
tina.drinkBeer();

// Person.prototype.sayHello();
// Person.prototype.drinkBeer();
