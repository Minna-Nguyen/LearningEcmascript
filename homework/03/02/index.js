function makeCalculation(a, b) {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      if (b != 0) {
        console.log("calculating stuff");
        const division = a / b;
        resolve(division);
      } else {
        reject("cannot divide with zero.");
      }
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

// make the calculation that takes time and when ready, invoke the
// arrow function.
// makeCalculation(10, 5).then((result) => console.log(`result = ${result}`));

function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    const random = Math.floor(Math.random() * 2);
    if (random == 1) {
      setTimeout(() => {
        console.log(`sending to backend ${result}`);
        resolve("done");
      }, 1000);
    } else if (random == 0) {
      console.log("failed to connect to backend");
    }
  }
  const p = new Promise(asynFunc);
  return p;
}

makeCalculation(10, 5)
  .then((sum) => sendStuffToBackend(sum))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));
2;
