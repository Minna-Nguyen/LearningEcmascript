function Person(fname, lname) {
  if (this instanceof Person) {
    this.fname = fname;
    this.lname = lname;
  } else {
    return new Person(fname, lname);
  }
}

var obj1 = new Person("jack", "smith");
console.log(obj1.fname); // 'jack'
console.log(obj1.lname); // 'smith'
console.log(obj1);
console.log();

var obj2 = Person("karen", "manager");
console.log(obj2.fname); // 'karen'
console.log(obj2.lname); // 'manager'
console.log(obj2);
