/*Um programa para calcular o valor de uma viagem.

tera 3 variaveis
1 - preço do combustivel;
2 - valor medio de combustivel do carro por KM;
3 - distancia em KM da viagem;

imprima no console o valor que sera gasto de combustivel para realizar a viagem.*/

let preçoCombustivel = 5.48;
let kmporLitro = 10;
let distanciaViagemKm = 300;


console.log("Em uma viagem de: " + distanciaViagemKm + "KM, Ira necessitar de: R$" + (distanciaViagemKm / kmporLitro) * preçoCombustivel + " para realizar a viagem." );