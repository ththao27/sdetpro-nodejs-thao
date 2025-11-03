// type: function declaration
function add(a, b) {
  return a + b;
}

// type: function expression
const add1 = function (a, b) {
  return a + b;
};

// type: arrow function
const add2 = (a, b) => {
  return a + b;
};

// type: arrow function with implicit return
const add3 = (a, b) => a + b;

// type: arrow function with implicit return and single parameter
const square = a => a * a;

// Object literal -> Object chỉ có các properties
// lexical this binding: dính sth với sth
const person = {
  name: 'John',
  age: 30,
  sayHello: function () {
    setTimeout(() => {
      // lexical this binding with arrow function
      console.log(`Hello, my name is ${this.name}`);
    }, 2 * 1000);
  },
};
person.sayHello();
