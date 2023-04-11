let valorDaPeca = 90;
let formaDePagamento = 4;

function aplicarDesconto(valorDaPeca, desconto) {
  return (valorDaPeca - (valorDaPeca * (desconto / 100)));
}

function aplicarJuros(valorDaPeca, desconto) {
  return (valorDaPeca + (valorDaPeca * (desconto / 100)))
}

if (formaDePagamento === 1) {
  console.log(aplicarDesconto(valorDaPeca, 15));
} else if (formaDePagamento === 2) {
  console.log(aplicarDesconto(valorDaPeca, 10))
} else if (formaDePagamento === 3) {
  console.log(valorDaPeca);
} else {
  console.log(aplicarJuros(valorDaPeca, 10));
}