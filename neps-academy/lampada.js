// let input = '3\n1 2 2'
let input = '4\n2 1 2 2'

let lampada1 = 0;
let lampada2 = 0;
let lista = input.split('\n');
let qntCliques = lista[0];
let cliques = lista[1].split(' ');
for (let i = 0; i < qntCliques; i++) {
    if (cliques[i] == 1 && lampada1 === 0) {
        lampada1 = 1;
    }
    else if (cliques[i] == 1 && lampada1 === 1) {
        lampada1 = 0;
    }
    if (cliques[i] == 2 && lampada1 === 0 && lampada2 === 0){
        lampada1 = 1;
        lampada2 = 1;
    }
    else if (cliques[i] == 2 && lampada1 === 1 && lampada2 === 0){
        lampada1 = 0;
        lampada2 = 1;
    }
    else if (cliques[i] == 2 && lampada1 === 0 && lampada2 === 1){
        lampada1 = 1;
        lampada2 = 0;
    }
    else if (cliques[i] == 2 && lampada1 === 1 && lampada2 === 1){
        lampada1 = 0;
        lampada2 = 0;
    }
}
console.log(lampada1);
console.log(lampada2);