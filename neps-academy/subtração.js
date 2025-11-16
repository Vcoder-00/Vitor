const fs = require("fs");
const input = fs.readFileSync(0, "utf8").split("\n").map(Number);

// Your code goes here
let a = input[0];
let b = input[1];
let result = a - b;
console.log(result)