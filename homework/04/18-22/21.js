let user = {
  name: "KAren",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    let f = this.sayHello.bind(this);
    setTimeout(f, 1000);
  },
};

user.sayDelayedHello();
