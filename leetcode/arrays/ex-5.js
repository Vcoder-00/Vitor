// removeElement

//requisito: in-place

let input = [0, 1, 2, 2, 3, 0, 4, 2];


var removeElement = function(nums, val) {
    // 'k' é o nosso ponteiro "Organizador".
    // Ele conta os elementos bons e aponta para a próxima posição a ser preenchida.
    let k = 0;

    // 'i' é o "Inspetor" que percorre todo o array.
    for (let i = 0; i < nums.length; i++) {
        
        // Se o inspetor encontrar um número que queremos manter...
        if (nums[i] !== val) {
            
            // ...ele o entrega ao organizador.
            nums[k] = nums[i];
            
            // O organizador avança para preparar o próximo espaço.
            k++;
        }
    }
    
    // Ao final, 'k' é a contagem exata dos elementos que foram mantidos.
    // console.log(nums)
    return k;
};


console.log(removeElement(input, 2)); //"Mude o array nums de tal forma que os primeiros k elementos de nums contenham os elementos que não são iguais a val. Os elementos restantes de nums não são importantes, assim como o tamanho de nums."
// (isso é a solução 'in-place' uma reorganização do array original que não cria novos arrays para não ocupar mais espaço em memória, mas que torna os k primeiros elementos (no caso, os que não são 'val') entre os indices 0 e k-1)

// minha solução sem resolver de modo in-place

// var removeElement = function (nums, val) {
//     k = 0;
//     cortes = [];
//     nums = nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) {
//             k++;
//             cortes.push(i);
//         }
//     }
//     nums.splice(cortes[0], cortes.length);
//     // console.log(cortes);
//     console.log(nums);
//     return k;
// }