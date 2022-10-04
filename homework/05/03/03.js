/* STARTING POINT HERE. 
 `setInterval` is calling `tick` function like a normal function: `tick()`. It is not calling it with syntax like `object.tick()`. */

// function Clock() {
//   this.time = new Date().toString();
//   this.startInterval = function () {
//     setInterval(this.tick, 1000);
//   };
//   this.tick = function () {
//     this.time = new Date().toString();
//     console.log(this.render());
//   };
//   this.render = function () {
//     return this.time;
//   };
// }

// case 1: fix problem with anonymous function and inner closure
function Clock() {
  this.time = new Date().toString();
  //problem fixed HERE

  let tickAlreadyPls = this;
  this.startInterval = function () {
    setInterval(function () {
      tickAlreadyPls.tick();
    }, 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}

// let clock = new Clock();
// console.log(clock.render()); // outputs time
// clock.startInterval(); // outputs time for every second, uses render

// case 2: fix problem with arrow syntax
function Clock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    //problem fixed HERE

    setInterval(() => this.tick(), 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}
// let clock2 = new Clock();
// console.log(clock2.render()); // outputs time
// clock2.startInterval(); // outputs time for every second, uses render

// case 3: fix problem with function binding

function Clock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    //problem fixed HERE
    let f = this.tick.bind(this);
    setInterval(f, 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}

let clock3 = new Clock();
console.log(clock3.render()); // outputs time
clock3.startInterval(); // outputs time for every second, uses render
