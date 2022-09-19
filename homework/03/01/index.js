function makeCalculation() {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log("calculating stuff");
      const division = 5 / 5;
      resolve(division);
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

// make the calculation that takes time and when ready, invoke the
// arrow function.
makeCalculation().then((result) => console.log(`result = ${result}`));

function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log(`sending to backend ${result}`);
      resolve("done");
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

makeCalculation()
  .then((sum) => sendStuffToBackend(sum))
  .then((msg) => console.log(msg));

/*comes out in wrong order 15423 */
// var sum = null;

// function makeCalculation() {
//   console.log("2) calculating sum...");
//   sum = 5 + 5;
//   console.log("3) sum is " + sum);
// }

// function sendStuffToBackend() {
//   console.log("4) sending " + sum + " to backend's database");
// }

// console.log("1) starting the calculation and sending");
// setTimeout(makeCalculation, 2000);
// setTimeout(sendStuffToBackend, 1000);
// console.log("5) ending the calculation and sending");

/*will come out in right order 12345 */
// var sum = null;

// function makeCalculation() {
//   console.log("2) calculating sum...");
//   sum = 5 + 5;
//   console.log("3) sum is " + sum);
//   setTimeout(sendStuffToBackend, 1000);
// }

// function sendStuffToBackend() {
//   console.log("4) sending " + sum + " to backends database");
//   console.log("5) ending the calculation and sending");
// }

// console.log("1) starting the calculation and sending");
// setTimeout(makeCalculation, 2000);
