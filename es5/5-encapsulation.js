// Set property with '_' prefix
function HPerson(name) {
  this._name = name;
}

HPerson.prototype.getName = function () {
  return this._name;
};
HPerson.prototype.setName = function (newName) {
  this._name = newName;
};

var tom = new HPerson('Tom');
console.log('This is', tom.getName());

// Closures
function CPerson(name) {
  this.getName = function () {
    return name;
  };
  this.setName = function (newName) {
    name = newName;
  };
}

const james = new CPerson('James');
console.log('This is', james.getName());
