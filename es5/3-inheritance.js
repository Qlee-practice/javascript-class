function Person(name) {
  this.name = name;
}

Person.prototype.sayHelloTo = function (other) {
  console.log('Hello', other.name + ',', 'I am', this.name);
};

// Inheritance
function Student(name, grade) {
  this.__super__.call(this, name);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.__super__ = Person;

Student.prototype.showGrade = function () {
  console.log('I\'m', this.name, 'and my grade is', this.grade);
};


var tom = new Person('Tom');
var james = new Student('James', 'A');

tom.sayHelloTo(james);

james.sayHelloTo(tom);
james.showGrade();

console.log(james instanceof Student);
console.log(james instanceof Person);

