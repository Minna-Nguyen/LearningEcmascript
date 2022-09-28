function doIt() {
  console.log(this);
  console.log(this == global); //true
  this.hello = "hey i'm global now!";
}
doIt();
console.log(hello); //outputs the this.hello (which is global variable)
