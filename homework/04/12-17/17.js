function helper() {
  user.sayHello();
}
let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    // let f = user.sayHello;
    // setTimeout(f, 1000); // Hello, undefined
    // setTimeout(this.sayHello, 1000); // Hello, undefined
    setTimeout(helper, 1000);
  },
};
user.sayHello();
user.sayDelayedHello();
