// imedeately invoked function expression --> IFFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and executed immediately after it is created. It allows you to run code immediately in its own scope, avoiding polluting the global scope.

//named iffe
(function iffe1() {
  console.log(`yo form iffe1`);
})(); //semicolon is important

//iffe without name
(() => {
  console.log("yo from iffe2");
})();
