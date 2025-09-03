// O que o programa faz? inverte as palavras mantendo a ordem delas

// entrada: 'Hello World'

//saida: 'olleH dlroW'

let input = 'Abacaxi acabou de ficar maduro';

class Solucao {
    // Função para inverter uma string (não existe nativamente em JS)

    inverterPalavras(str) {
        return str.split('').reverse().join('');
    }

    reverterletras(str) {
        let novaString = '';
        let r = 0;
        let l = 0;

        while (r < str.length - 1) {

            if (str[r] !== ' ') {
                r += 1;
            }
            else {
                novaString += this.inverterPalavras(str.slice(l, r)) + ' ';
                r += 1;
                l = r;
            }
        }
    novaString += this.inverterPalavras(str.slice(l, r));
    return console.log(novaString.slice(0, novaString.length - 1));
    }
}

teste = new Solucao;
teste.reverterletras(input);

