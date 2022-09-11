function isPositiveInteger(value, onSuccess, onError) {
  if (value > 0) {
    onSuccess();
  } else {
    onError();
  }
}
//calling the function isPositiveInteger
// using arrow syntax
isPositiveInteger(
  -123,
  () => {
    console.log("positiivinen");
  },
  () => {
    console.log("negatiivienn");
  }
);
