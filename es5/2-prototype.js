function Person(name) {
  this.name = name;

}

Person.prototype = {
  sayHelloTo(other) {
    console.log('Hello', other.name + ',', 'I am', this.name);
  }
};

var tom = new Person('Tom');
var james = new Person('James');

tom.sayHelloTo(james);
james.sayHelloTo(tom);





