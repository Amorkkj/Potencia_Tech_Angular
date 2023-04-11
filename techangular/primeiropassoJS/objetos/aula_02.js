class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome eh ${this.nome} e minha idade eh ${this.idade}`);
    }
};

/*const edevando = new Pessoa('Edevando Alves', 24);
//edevando.nome = 'Edevando Alves Xavier'
//edevando.idade = 24;
edevando.descrever();

const iris = new Pessoa('Iris Tamires', 20);
//iris.nome = "Iris Tamires"
//iris.idade = 20;
iris.descrever();

console.log(edevando);*/


function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} eh mais velho(a) que ${pessoa2.nome}`);
    } else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} eh mais velho(a) que ${pessoa1.nome}`);
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`);
    }
}

const edevando = new Pessoa('Edevando Alves', 25);
const iris = new Pessoa('Iris Tamires', 20);

compararPessoas(edevando, iris);


/* const edevando = {
    nome: "Edevando Alves Xavier",
    idade: 24,

    descrever: function () {
        console.log(`Meu nome eh ${this.nome} e minha idade eh ${this.idade}`);
    }
};

console.log(edevando["nome"]);

const edevando2 = {
    nome: "Edevando2 Alves Xavier",
    idade: 24,

    descrever: function () {
        console.log(`Meu nome eh ${this.nome} e minha idade eh ${this.idade}`);
    }
}; */