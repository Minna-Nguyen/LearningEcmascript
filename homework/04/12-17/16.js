let user = {
  firstName: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.firstName}!`);
  },
};
let myFunction = user.sayHello.bind(user); // replace undefined with 'jack' object
myFunction();
