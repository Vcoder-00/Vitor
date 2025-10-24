const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

let dist = Number(input);
function conversorBu(num) {
    return (num * 1.6669514084507042).toFixed(2);
}
console.log(conversorBu(dist));