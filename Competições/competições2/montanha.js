const fs = require("fs");

const input = (fs.readFileSync(0, "utf8")).trim().split("\n");

let montanha = input[1].split(" ").map(Number);

maxValue = Math.max(...montanha);

let maisDeUmPico = false;

for (let i = 0; i < montanha.length; i++){
    if (montanha[i] < montanha[i - 1] && montanha[i] < montanha[i+ 1]){
        maisDeUmPico = true;
    }
}
console.log(`${(maisDeUmPico) ? "S":"N"}`);

