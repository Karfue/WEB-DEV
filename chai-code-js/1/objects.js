const user = {
  name: "harsh",
  age: 17,
  kar: {
    name: "kar",
    age: 7,
  },
};

console.log(user["kar"].name); // 1st way
console.log(user.kar.name); // 2nd way

// printing a symbol defined in obj

let sym1 = Symbol("1");

let sum = {
  name: "harsh",
  [sym1]: "my1",
};

// console.log(sum[sym1]);      -- Wrong
// console.log(typeof sum[sym1]);     -- Wrong
console.log(typeof sym1);

// Combining two objects

let bj1 = { name1: "harsh", age1: 17 };
let bj2 = { name2: "kar", age2: 7 };
let bj3 = Object.assign({}, bj1, bj2);
console.log(bj3);

// destructuring objects
// will use in backend like
// let {username, password} = req.body;

let auth = {
  name: "harsh",
  password: "harsh123",
  email: "harsh@gmail.com",
};

let { name, password: pass, email } = auth;

console.log(name);
console.log(pass);
