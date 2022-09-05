let x = "hello";
let y = "he'llo";
let z = `hello`;
let a = 'as"df';
let expression = "EXPRESSION";
console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(`yeeehh ${a} more ${expression}\n `);

let multiLine1 = "-------wowieeee";
let multiLine2 = "testing ting";

console.log(multiLine1 + "\n" + multiLine2 + "\n"); //have to use + operator to connect these
console.log(`This is the same 
multistring thing with backticks '\`' ${multiLine1}
${multiLine2}`); // no need to use + operator, can also use enter without "\n" thingy
