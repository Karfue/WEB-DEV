// Funtions
// Syntax
// function funName(parameter) {
//
// }
// funName(arguments) // calling a functions

function myFunction(name) {
  console.log(`hello ${name}`);
}

myFunction("harsh");

// Functions with arrays and objects

// if i dont know how many arguments will i get
function calculate(...result) {
  return result;
}

console.log(calculate("3213", 3232, 3232312, { name: "harsh", age: 17 }));

function calculate1(val1, val2, val3, ...result) {
  // console.log(`val1 : ${val1}`);
  // console.log(`val2 : ${val2}`);
  // console.log(`val3 : ${val3}`);
  // console.log(`Result : ${result}`);
  console.log(val1);
  console.log(val2);
  console.log(val3);
  console.log(result);
}

calculate1(
  "harsh",
  45487,
  "4324",
  "jar",
  4234,
  { name: "harsh", age: 17 },
  "yo",
  432,
  43242,
  4324,
);
