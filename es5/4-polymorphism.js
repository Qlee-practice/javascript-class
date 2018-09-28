// 多态：同一操作（方法）作用于不同的对象时，可以有不同的解释，产生不同的执行结果
function Person(name) {
  this.name = name;
}

Person.prototype.sayHelloTo = function (other) {
  console.log('Hello', other.name + ',', 'I am', this.name);
};

// Inheritance
function Student(name, grade) {
  this.__super__.constructor.call(this, name);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.__super__ = Person;

Object.assign(Student.prototype, {
  __super__: Person.prototype,
  sayHelloTo(other) {
    this.__super__.sayHelloTo.call(this, other);
    console.log('Nice to meet you');
  }
});

var tom = new Person('Tom');
var james = new Student('James', 'A');

tom.sayHelloTo(james);
james.sayHelloTo(tom);

// function GoodGradeStudent(name) {
//   this.__super__.call(this, name, 'A');
// }
//
// GoodGradeStudent.prototype = Object.create(Student.prototype);
// GoodGradeStudent.prototype.__super__ = Student;
//
// GoodGradeStudent.prototype.sayHelloTo = function (other) {
//   this.__super__.sayHelloTo.call(this, other);
//   console.log('Very nice to meet you');
// };
//
// var alice = new GoodGradeStudent('Alice');
// alice.sayHelloTo(tom);
