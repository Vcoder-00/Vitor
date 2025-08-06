lista = input.split("\n");
let quebrados = 0;
qntBandeja = parseFloat(lista[0]);
for (i=0; i < qntBandeja; i++){
    let bandeja = lista[1+i].split(" ").map(Number);
    if (bandeja[0] > bandeja[1]){
        quebrados += bandeja[1];        
    }
}
console.log(quebrados);