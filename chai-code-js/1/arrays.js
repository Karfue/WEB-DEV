let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
// arr2 = arr2.join();

// let arr3 = arr1.push(arr2);
let arr3 = arr1.concat(arr2);
// console.log(arr3);

// Using Spread
let arr4 = [...arr1, ...arr2]; // mostly used

arr1.push(arr2);
console.log("A", arr1);
console.log("B", arr3);
console.log("C", arr4);

let unusual = [
  1,
  2,
  3,
  4,
  [3, 3, 3],
  [2343, 42434, 342, [4234234324, 423, [423423423]]],
];
let beautify_unusual = unusual.flat(Infinity);
console.log("D", beautify_unusual);

let name = "Harsh";
console.log(Array.isArray(name));
// To convert any thing to an array
console.log(Array.from(name));

// Try with an object
let obj = {
  name: "harsh",
  age: 17,
  qualifications: {
    cs: "coding",
    languages: {
      js: "basic",
      rust: "basic",
      python: "basic",
    },
    linux: "arch",
    previousLinux: "ubuntu",
    previousOs: "windows",
  },
};

let obj1 = {
  name: "harsh",
  age: 17,
};

console.log(Array.from(obj));
