class Carros {
    marca;
    cor;
    gasolinaPorKM;

    constructor (marca, cor, gasolinaPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaPorKM = gasolinaPorKM
    }

    calcularViagem (precoCombustivel, distanciaViagemKM) {
        return this.gasolinaPorKM * distanciaViagemKM * precoCombustivel;
    }
}

const corsa = new Carros('Chevrolet', 'Branco', 1/10);
const monza = new Carros('Chevrolet', 'Prata', 1/8);
const tesla = new Carros('Tesla', "Preto", 1/20)
console.log(corsa.calcularViagem(5.45, 100));
console.log(monza.calcularViagem(5.45, 100));
console.log(tesla.calcularViagem(5.45, 100));
