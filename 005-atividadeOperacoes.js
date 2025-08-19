/*
    Crie um programa que receba dois números e devolva como resultado a soma, subtração, multiplicação e a divisão
    entre o primeiro e segundo número.
*/

let entrada = require('prompt-sync')();

console.log('Seja bem-vindo a calculadora do Thiago, digite as informações a seguir e descubra o resultado.')

let n1 = entrada('Digite o 1º número: ')
let n2 = entrada('Digite o 2º número: ')

/*let soma = parseInt(n1) + parseInt(n2);
let subtracao = parseInt(n1) - parseInt(n2);
let multiplicacão = parseInt(n1) * parseInt (n2);
let divisao = parseInt(n1) / parseInt(n2);
let resto = parseInt(n1) % parseInt(n2);*/

let soma = parseFloat(n1) + parseFloat(n2);
let subtracao = parseFloat(n1) - parseFloat(n2);
let multiplicacão = parseFloat(n1) * parseFloat (n2);
let divisao = parseFloat(n1) / parseFloat(n2);
let resto = parseFloat(n1) % parseFloat(n2);

console.log(`Resultado dos valores somados = ${soma}`);
console.log(`Resultado dos valores subtraídos = ${subtracao}`);
console.log(`Resultado dos valores multiplicados = ${multiplicacão}`);
console.log(`Resultado dos valores divididos = ${divisao.toFixed(2)}`);
console.log(`Resultado dos valores dividos inteiramente = ${parseInt(divisao)}`);
console.log(`Resultado do resto da divisão = ${resto}`)

console.log(`Resultado ${n1} + ${n2} = ${soma}`);
console.log(`Resultado ${n1} - ${n2} = ${subtracao}`);
console.log(`Resultado ${n1} * ${n2} = ${multiplicacão}`);
console.log(`Resultado ${n1} / ${n2} = ${divisao.toFixed(2)}`);
console.log(`Inteiro da divisão ${n1} / ${n2} = ${parseInt(divisao)}`);
console.log(`Resultado ${n1} % ${n2} = ${resto}`);


entrada('Pressione "ENTER" para encerrar o programa!');

console.log('Programa encerrado com sucesso!!!');
