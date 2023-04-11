class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }


    calcularImc() {
        return (this.peso / (Math.pow(this.altura, 2)));
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ("Abaixo do peso");
        } else if (imc >= 18.5 && imc < 25) {
            return ("Peso Normal");
        } else if (imc >= 25 && imc < 30) {
            return ("Acima do peso");
        } else if (imc >= 30 && imc < 40) {
            return ("Obeso");
        } else {
            return ("Obesidade grave");
        }
    }

}

const jose = new Pessoa('Jose Amaro', 70, 1.75);
const iris = new Pessoa('Iris Tamires', 45, 1.53)
const edevando = new Pessoa('Edevando Alves', 85, 1.73)
console.log(jose.classificarImc());
console.log(iris.classificarImc());
console.log(edevando.classificarImc());
