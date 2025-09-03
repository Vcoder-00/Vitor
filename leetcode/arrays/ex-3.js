// retornar quais 3 algarismos diferentes dentro do array resultam em zero

input = [0, 0, 0];

// programa deve devolver: [-1,2,-1],[-1,0,1]

// anotação map com twoSum não é uma solução válida pq aqui queremos 2 valores que complemente um valo x
// e não apenas um (o complemento) como no two sum

var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    target = 0;
    l = 1;
    r = nums.length - 1;
    acumuladorTrios = [];


    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { // verificação para evitar duplicatas
            continue; // Pula para a próxima iteração do loop 'i'
        }
        l = i + 1;
        r = nums.length - 1;

        while (l < r) {

            currentSum = nums[i] + nums[l] + nums[r];

            if (currentSum < 0) {
                l++;
            }
            else if (currentSum > 0) {
                r--;
            }

            else { // (currentSum === 0)
                acumuladorTrios.push([nums[i], nums[l], nums[r]])
                l++;
                r--;
                // --- Missão 2: Pular as duplicatas ---
                // Pula todos os 'left' que são iguais ao anterior
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
                // Pula todos os 'right' que são iguais ao próximo (o que ele era antes de decrementar)
                // (Nota: A verificação de 'r' é um pouco diferente, mas a ideia é a mesma)
                while (l < r && nums[r] === nums[r + 1]) {
                    r--;
                }
            }
        }
    }
    return acumuladorTrios;
}



console.log(threeSum(input));