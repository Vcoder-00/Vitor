// max prefix commum

let strs = ["flower", "flow", "flight"];
let strs2 = ["dog", "racecar", "car"];
let strs3 = ['a'];
let strs4 = ["flower","flower","flower","flower"];

var longestCommonPrefix = function (strs) {
    if (strs === ''){
        return '';
    }
    else if (strs.length === 1) {
        return strs[0];
    }
    else {

        for (let i = 0; i < strs[0].length; i++) {
            let prefix = strs[0][i];


            for (let j = 1; j < strs.length; j++) { // percorre cada string começando da segunda
                if (i >= strs[j].length || prefix !== strs[j][i]) { // no momento que i (valor da posição das letras da primeira palavra) deixa de ser < strs[j] (tamanho da próxima palavra) ou quando a letra com posição i é diferente da letra de str[j][i] ela retorna:
                    return strs[0].slice(0, i); // versão cortada da primeira palavra que serviu de base para comparação
                }
            }
            
        }
        
    }
    return strs[0];
}

console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3)); // retorna ''
console.log(longestCommonPrefix(strs4));

