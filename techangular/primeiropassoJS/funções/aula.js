// Se chama procedimento quando não retorna nada.
function sayMyName(name) {
    console.log("Your name is " + name);
}

sayMyName("Eddy");
sayMyName("Edd");
sayMyName("Ed");

// Return quando a função retorna algo.
function quadrado (valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo
}

console.log(incrementarJuros(200, 15)); 


function calcularJuros() {

}

function main() {
    console.log('Programa principal');
    calcularJuros();
}
main();
