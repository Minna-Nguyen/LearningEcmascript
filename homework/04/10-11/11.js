function doIt(a, b) {
  console.log(a);
  console.log(b);
  console.log(this);
}
let object = { key: "value" };
doIt(21, 25); // 21, 25, global object
// x.apply() first argument has something to do with the this object, the other arguments are given as an array
doIt.apply(["help", "me"]); // ['help', 'me']
doIt.apply(object, ["HELP", "ME"]); // output is object -> { key: "value" };
