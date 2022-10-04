function readCommanLine() {
  let arr = process.argv.slice(2); //this is a String array!

  let toNumber = [];
  for (let i of arr) {
    //isNaN is boolean, so if it's not a NaN value, Number(i) will be put in arr2
    if (!isNaN(Number(i))) {
      toNumber.push(Number(i));
    } else {
      console.log("CRASH :)))");
      //this will make the function crash
      process.exit(1);
    }
  }
  return toNumber;
}

export default readCommanLine;
