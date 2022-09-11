var myFunc = new Function("", 'console.log("hello")');
myFunc.call();
/*
myFunc is an object that doesn't have any arguments as its parameter
and it will also print "hello" to the console
*/
