let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    // setTimeout(function () {
    //   this.sayHello();
    // }, 1000);

    // var _this = this
    setTimeout(() => this.sayHello(), 1000);
    // return _this.sayHello(); invokes the function using the variable _this
  },
};
user.sayDelayedHello();
