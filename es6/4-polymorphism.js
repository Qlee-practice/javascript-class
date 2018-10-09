// 多态：同一操作（方法）作用于不同的对象时，可以有不同的解释，产生不同的执行结果
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHelloTo(other) {
    console.log('Hello', other.name + ',', 'I am', this.name);
  }
}


class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  sayHelloTo(other) {
    super.sayHelloTo.call(this, other);
    console.log('Nice to meet you');
  }
}

var tom = new Person('Tom');
var james = new Student('James', 'A');

tom.sayHelloTo(james);
james.sayHelloTo(tom);

const a = new Person('He');

a.__proto__

Object.getPrototypeOf(a)
