/*const alunos = ['Iris', 'Edevando', 'Stella'];

//adicionar dinamicamente no final da lista
alunos.push('Caliu');
//adicionar "manualmente" na lista
alunos[4] = 'Nega'

console.log(alunos);
console.log(alunos[1]);
console.log(alunos[3]);*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(6);
notas.push(5);
notas.push(10);
//modo manual
//const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]
//console.log(soma / 5);
//dinamico
/*const nome = "Edevando Alves Xavier"
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);    
}*/

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);