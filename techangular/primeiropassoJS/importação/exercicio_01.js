/*uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
faça um programa que receba os 5 numeros para os alunos e mostre o maior numero sorteado.

dados de entrada:
5
50
10
98
23

saida:
98



const { gets, print } = require('./funcoes_auxiliares');

const numeroSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);
}

let maiorValor = -1

for (let i = 0; i < numeroSorteados.length; i++) {
    const numeroSorteado = numeroSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);*/

const { gets, print } = require('./funcoes_auxiliares');

const quantidadeDeAlunos = gets();
let maiorValor = -1

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
     if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
     }
}

print(maiorValor);