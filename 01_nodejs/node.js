// require() is a built-in function that loads a module in Node.js. If we provide "./math" then it will search path in files but if we provide "math" it will search in node modules.
const math = require("./math");
console.log(math.add(1, 2));
console.log(math.sub(1, 2));
// console.log(math)