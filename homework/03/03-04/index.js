var fs = require("fs");
var readline = require("readline-sync");

// function doIt() {
//   var userInput = readline.question("What is the name of the file? ");
//   //ask name for the file -> create the file with that name
//   // if no errors, read the file content
//   fs.writeFile(`${userInput}`, "helloooo", (err, data) => {
//     if (err) {
//       return false;
//     } else {
//       fs.readFile(`${userInput}`, "utf-8", (err, data) => {
//         if (err) {
//           return false;
//         } else {
//           console.log(`filename: ${userInput}`);
//           console.log(data);
//         }
//       });
//     }
//   });
// }

/* start of 04 part*/

function doIt() {
  var userInput = readline.question("What is the name of the file? ");
  let checkIfExist = fileExist(userInput);
  //if file exist, read the content
  if (checkIfExist) {
    fs.readFile(`${userInput}`, "utf-8", (err, data) => {
      //err occurs if reading data fails
      if (err) {
        throw err;
      } else {
        //throw exception if file is not JSON
        try {
          const obj = JSON.parse(data);
          //check if the json file has property "name"
          if ("name" in obj) {
            console.log(obj["name"]);
          } else {
            console.log(
              `file ${userInput} contains json but not property name`
            );
          }

          // console.log("name" in obj);
        } catch (err) {
          console.log(`file ${userInput} does not contain json`);
        }
      }
    });
  }
}

function fileExist(data) {
  let fileExist = fs.existsSync(`./${data}`);
  if (!fileExist) {
    console.log("file does not exist");
  } else {
    return true;
  }
}
doIt();
