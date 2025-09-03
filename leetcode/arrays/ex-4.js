// remove duplicatas de um array 

// Requisito: sem alocar outros arrays na memória

let input = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function (nums) {
    let k = 1; // ponteiro lento

    for (let i = 1; i < nums.length; i++) { // i ponteiro rapido
        if (nums[i] != nums[i - 1]) { // conta-se a interações com troca de posição
            
            // ERRO CORRIGIDO:
            // O novo número único (nums[i]) é colocado
            // na posição correta marcada pelo Organizador 'k'.
            nums[k] = nums[i];
            k++;
        }
    }
    return k; // o primeiro termo não é o inicio não conta pois é a referencia para futuras troca no loop 
}

const k = removeDuplicates(input);

console.log("Total de elementos únicos:", k); // Saída: 5
console.log("Array modificado:", input.slice(0, k)); // Saída: [0, 1, 2, 3, 4]