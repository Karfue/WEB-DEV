// console.log(this);  --> this is an object.
//

let user = {
  name: "harsh",
  age: 17,

  loggingUser: function () {
    console.log(`${this.name} is ${this.age} years old!`); // this is current context
    console.log(this); // this will print the user object
  },
};

console.log(this);

// this.name

// Definition: Accesses the name property on the object that this refers to at runtime.

// Context:
// this is dynamically determined based on how or where the method is called.
// Inside a method of an object, this refers to the object that invoked the method.

user.loggingUser();

// Arrow Functions

let arrow = () => {};

// implicit return menas no need of using 'return' keyword
// explicit return means have to use 'return' keyword
