var fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const readline = require("readline-sync");
var userInput = readline.question("file name: ");

function parseJson(data) {
  function func(resolve, reject) {
    const obj = JSON.parse(data);
    if ("name" in obj) {
      resolve(obj["name"]);
    } else {
      reject("name not in property");
    }
    // fs.readFile(`${data}`, "utf-8", (err, data) => {
    //   //err occurs if reading data fails
    //   if (err) {
    //     reject(err);
    //   } else {
    //     const obj = JSON.parse(data);
    //     if ("name" in obj) {
    //       resolve(obj["name"]);
    //     } else {
    //       resolve("name not in property");
    //     }
    //   }
    // });
  }
  // parse the data (do not implement try catch, if exception occurs, this
  // will be catched automatically in your catch outside of this function.
  // if name is found from obj, call resolve, otherwise call reject
  const p = new Promise(func);
  return p;
}
readFile(userInput, "utf-8")
  .then((data) => parseJson(data))
  .then((name) => console.log(name))
  .catch((err) => console.log(err));

// readFile("stuff.json", "utf-8")
//   .then((data) => parseJson(data))
//   .then((name) => console.log(name))
//   .catch((msg) => console.log(msg));
