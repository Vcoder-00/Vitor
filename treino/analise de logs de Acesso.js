const logs = [
  "[INFO]: Usuário 'ana' fez login.",
  "[INFO]: Página 'home' carregada.",
  "[ERROR]: Falha na conexão com o banco de dados.",
  "[WARNING]: Senha do usuário 'pedro' irá expirar em 3 dias.",
  "[INFO]: Usuário 'ana' fez logout."
];

const listaLogs = [];
const listaDeAvisos = [];  

const contador = {'INFO': 0, 'ERROR': 0,'WARNING': 0}

for (let i = 0; i < logs.length; i++){
    let capturadorLogs = logs[i].split(" ");
    listaLogs.push(capturadorLogs);
}
for (let i = 0; i < listaLogs.length; i++){
listaDeAvisos.push(listaLogs[i][0].replace(/[\[\]:]/g, ""));
}

for (let item of listaDeAvisos){
  contador[item]++;
}

console.log(listaDeAvisos);
console.log('------------------------');
console.log(contador);