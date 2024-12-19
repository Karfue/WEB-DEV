// Local and Global Scope
//
// Scope --> {}

if (true) {
  let a = 344;
  const b = 345;
  var c = 346;
}

// (the rule) value inside the scope should not go outside

// console.log(a);
// console.log(b);
console.log(c); // This get printed outside the scope

// Value outside the scope can be used but value from inside the scope will not go outside
// See in the function that in the scope of one we declared harsh and able to acces in another scope inside that scope
// but in the scope of two we declared age it can't be accesed outside the scope of two.
function one() {
  const name = "harsh";

  function two() {
    const age = 16;
    console.log(name);
  }
  // console.log(age);

  two();
}

one();
