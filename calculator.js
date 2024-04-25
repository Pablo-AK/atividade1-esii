//retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
  resultado = `A Soma dos numero ${v1} + ${v2} é ` + (v1 + v2);
  return resultado;
}
console.log(sum(10, 10));

//retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
  //Exemplo de uso da função de subtração
  resultado = `A subtração dos numero ${v1} - ${v2} é ` + (v1 - v2);
  return resultado;
}
console.log(sub(10, 5));

// // retorna o valor da divisão entre os dois parâmetros
// function div(v1, v2) {}

//retorna o valor da multiplicação entre os dois parâmetros

function mult(v1, v2) {
  resultado = `A Multiplicação dos numero ${v1} * ${v2} é ` + v1 * v2;
  return resultado;
}
console.log(mult(10, 5));

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
  return `O Resultado da Raiz Quadrada do numero ${v1} é = ${Math.sqrt(v1)}`;
}
console.log(square(25));
