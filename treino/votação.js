const votos = [
  'Candidato A', 'Candidato B', 'Candidato A',
  'Candidato C', 'Candidato A', 'Candidato B'
];

let contador = {
    'Candidato A' : 0, 'Candidato B' : 0, 'Candidato C': 0
}

for (let voto of votos){
    contador[voto]++;
}

console.log(contador);