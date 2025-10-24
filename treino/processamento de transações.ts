// Resposta esperada:
//
// {
//   totalClientesProcessados: 4,
//   totalClientesAtivos: 2,
//   totalTransacoesValidas: 505
// }

const dadosClientes: Array<[number, string, number[]]> = [
    [101, "ativo", [100, 50, 25]], // Válido. 3 transações.
    [102, "inativo", [200, 100]], // Válido. 2 transações.
    [103, "bloqueado", [500, 200]], // Ignorado.
    [104, "ativo", [75, -10, 30]], // Válido, mas a transação -10 deve ser pulada.
    [105, "ativo", [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]], // Excede o limite de 10 transações. A análise deve parar aqui.
    [106, "inativo", [10, 20]] // Este cliente não deve ser processado.
];

function processamentoRelatorioGeral(dadosClientes: Array<[number, string, number[]]>): object {
    let totalClientesProcessados = 0;
    let clientesAtivos = 0;
    let totalTransacoesValidas = 0;

    for (let i = 0; i < dadosClientes.length; i++) {
        if (dadosClientes[i][1] === 'ativo') {
            clientesAtivos++;
        }
    }
    for (let i: number = 0; i < dadosClientes.length; i++) {
        
        for (let j: number = 0; j < dadosClientes[i][2].length; j++) {
            if (dadosClientes[i][2].length > 10){
                break;
            }
            if (dadosClientes[i][2][j] < 0) {
                continue;
            }
            else {
                totalClientesProcessados++;
                totalTransacoesValidas += dadosClientes[i][2].length;
            }
        }
    }
    const relatorio = {
        'totalClientesProcessados': totalClientesProcessados,
        'totalClientesAtivos': clientesAtivos,
        'totalTransacoesValidas': totalTransacoesValidas
    };
    return relatorio;
}