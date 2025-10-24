const fs = require("fs");

const input = (fs.readFileSync(0, "utf8")).trim().split("\n");

qntPostes = parseFloat(input[0]);
postes = input[1].split(" ").map(Number);

posteSubstituido = 0;
posteConsertado = 0;

for (let poste of postes){
    if (poste < 50){
        posteSubstituido++;
    }
    else if (poste >= 50 && poste < 85){
        posteConsertado++;
    }
}
console.log(`${posteSubstituido} ${posteConsertado}`);
