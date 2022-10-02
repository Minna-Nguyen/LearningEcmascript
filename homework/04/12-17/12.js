let user = {
  name: "Jack",
  sayHello: function () {
    user.name = this;
    console.log(`Hello, ${this.name}!`);
    console.log("yes helloo");
  },
};
let myfunc = user.sayHello;
myfunc();
/* 
this is a function() method. The 'yes helloo' works because it doesnt relate to 'this keyword'. 
This keyword when invoked in function() it will refer to gloabl. So it's 'undefined'
*/
