let a = "x"; //only zero is false rest all is true
let b = Boolean(a);
console.log(b);

// DataTypes
// null = empty not zero
//
// Primitive (not given the refrence only copy of the value)
//
// 7 Types:
// String
// Boolean
// Number
// Null
// Undefined
// BigInt
// Symbol
//
//
// Refrence (NON PRIMITIVE) (given the refrence)
//
// Array
// Objects
// Functions
//

const hello = function () {
  console.log("hello world");
};
hello();
console.log(typeof hello);

// IN nomal variable if do
// let a = 3
// let b = a
// you get a copy
//
// but in types like object
// let a = {
//    name: "hatrsh",
//    email: "jkfj@gmal.com"
// }
// let b = a;
// you dont get a copy you get the refrence to same thing like if you change
// b.name = "kar"
// and
// console.log(a.name)
// and
// console.log(b.name)
// the output will be kar and kar.

let name = new String("harsh");
console.log(name[2]);
let abc = "kar";
console.log(abc[2]);
