/*
function isPositiveInteger(value, onSuccess, onError) {
  if (value > 0) {
    onSuccess();
  } else {
    onError();
  }
}
*/

// ternary way
let isPositiveInteger = (value, success, fail) => {
  return value > 0 ? success() : fail();
};

function onSuccess() {
  console.log("POSITIVE!");
}

function onError() {
  console.log("negative");
}
isPositiveInteger(4, onSuccess, onError);
isPositiveInteger(-10, onSuccess, onError);

/*
testing with anonymous function with ternary operator
let test = (value) => {
  return value > 0
    ? function () {
        console.log("yes");
      }
    : function () {
        console.log("no");
      };
};
let a = test(-33);
a();
*/
