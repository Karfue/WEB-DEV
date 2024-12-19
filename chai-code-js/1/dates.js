const dateNow = Date.now(); // Gets the current timestamp (milliseconds)
console.log(dateNow);

// Convert timestamp to a Date object and call toLocaleString() on it
const date = new Date(dateNow);
console.log(date.toLocaleString());
