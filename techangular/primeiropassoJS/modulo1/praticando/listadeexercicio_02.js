let pesoKG = 85;
let alturaM = 1.73;

let imc = pesoKG / Math.pow(alturaM,2);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso Normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
    console.log("Obeso");
} else {
    console.log("Obesidade grave");
}