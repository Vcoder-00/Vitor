const palavra = "abracadabra";
let contador = {'a' : 0, 'b' : 0, 'r' : 0, 'c' : 0, 'd' : 0}
for (let i =0; i < palavra.length; i++){
    contador[palavra[i]]++;
}
console.log(contador);