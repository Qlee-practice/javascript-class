class Person {
  static age = 6666;
  constructor(name) {
    this.name = name;
  }

  sayHelloTo(other) {
    console.log('Hello', other.name + ',', 'I am', this.name);
  }
}

// Inheritance
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  showGrade() {
    console.log('I\'m', this.name, 'and my grade is', this.grade);
  }
}

var tom = new Person('Tom');
var james = new Student('James', 'A');

tom.sayHelloTo(james);

james.sayHelloTo(tom);
james.showGrade();

console.log(Student.age)

console.log(james instanceof Student);
console.log(james instanceof Person);

