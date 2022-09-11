function isPositiveInteger(value, onSuccess, onError) {
  if (value > 0) {
    onSuccess();
  } else {
    onError();
  }
}

// using anonymous function as argument
isPositiveInteger(
  432,
  function () {
    console.log("is positive");
  },
  function () {
    console.log("is negative");
  }
);

// ternary operator way with anonymous function
/*
let isPositiveInteger = (value) => {
  return value > 0
    ? function () {
        console.log("poss");
      }
    : function () {
        console.log("negg");
      };
};
to access the inner functions, the result needs to be saved in some variable to show it
let x = isPositiveInteger(-2333);
x();
*/
