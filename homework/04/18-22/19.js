// let user = {
//   name: "Jack",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayDelayedHello: function () {
//     let variable = 10;
//     setTimeout(function () {
//       console.log(variable);
//     }, 1000);
//   },
// };
// user.sayDelayedHello(); // outputs 10

let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    // THIS WORKS
    // console.log(this);
    let thisWorks = this;
    setTimeout(function () {
      // THIS DOES NOT WORK
      //   console.log(thisWorks);
      thisWorks.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello();
