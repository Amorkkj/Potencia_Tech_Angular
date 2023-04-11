const edevando = {
    nome: "Edevando Alves Xavier",
    idade: 24,

    descrever: function () {
        console.log(`Meu nome eh ${this.nome} e minha idade eh ${this.idade}`);
    }
};

edevando.altura = 1.73;

delete edevando.nome;

edevando.descrever();
console.log(edevando.nome);
console.log(edevando.idade);
console.log(edevando);