var d = "this var is declared before function";
function canYouSeeMe() {
  let x = 1;
  if (x == 1) {
    var f;
    var a = "var";
    let b = "let";
    b = "let 'let variable' change";
    const c = "const";
    /*c = "naah you can't change me!"; -> can't change the value because it's a const*/
    console.log("INSIDE if block:");
    console.log(a); // output: var
    console.log(b); // output: LET let me change
    console.log(c); // output: const
    console.log(d); // output: this var is..
    f = "var: hoist me?";
    console.log(f);
    console.log(`${e}\n`); // all work because are declared in this same if block
  }
  console.log("OUTSIDE if block:");
  console.log(`${a}\n`);
  /*  console.log(b);
    console.log(c);
  let and const don't work here because they're outside of the if block*/
  console.log(d);
  console.log(e);
  console.log(f);
}

var e = "this var is declared after funciton"; // will be 'undefined' if this code line is after canYouSeeme()
canYouSeeMe();
