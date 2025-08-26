/*
    Crie um programa de um estabelecimento que receba dados como 
    o nome, a idade e se a pessoa é amigo do dono. 
    Retorne uma mensagem de acordo com as validações abaixo: 
    - Se a pessoa ter mais de 18 ano o acesso ao local será liberado. 
    - Pessoas com menos de 18 não acessam o local. 
    - Amigos do dono podem acessar o local independente da idade. 
    - Caso a pessoa tenha mais de 18 anos e seja amigo do dono, ganhara
    uma bebida.    
*/

let entrada = require('prompt-sync')();
let mensagemErro = []; 
let validaAmigo;

console.log         ('|-------------------------------------------------------|');
console.log         ('|                 Verificação de entrada                |');
console.log         ('|-------------------------------------------------------|');
let nome = entrada  ('|Digite seu nome:');
let idade = entrada ('|Digite sua idade:');
let amigo = entrada ('|Você é amigo do dono do estabelecimento:');
console.log         ('|-------------------------------------------------------|');
console.log('');

// if (nome === '' || idade === '' || amigo === '') {
//     console.log('É necessário preencher todas as informações pedidas!');    
// } else if (isNaN(idade)) {
//     console.log('A idade deve ser um número');    
// } else if (amigo[0].toLowerCase() !== 's' && amigo[0].toLowerCase() !== 'n') {
//         console.log('Erro amigo: ' + amigo.toLowerCase());        
// } else {
//     console.log('Começa o programa');    
// }

if (nome === '' || idade === '' || amigo === '') {
    mensagemErro.push('É necessário preencher todas as informações pedidas!');
}

if (isNaN(idade)) {    
    mensagemErro.push('A idade deve ser um número');
}

if (amigo !== '') {
    if (amigo[0].toLowerCase() !== 's' && amigo[0].toLowerCase() !== 'n') {
        mensagemErro.push('Erro amigo: ' + amigo.toLowerCase());
    } else {
        validaAmigo = amigo[0].toLowerCase() === 's' ? true : false;
    }
}

if (mensagemErro.length === 0) { 
    let mensagemPrograma = '';
    if (idade < 18 && validaAmigo === false) {      
        mensagemPrograma = 'Você não pode entrar.';
    }
    if ((idade < 18 && validaAmigo === true) || (idade >= 18)) {
        mensagemPrograma = 'Você pode entrar.';
    }
    if (idade >= 18 && validaAmigo == true) {
        mensagemPrograma = mensagemPrograma + '\nE ganhou uma bebida.'
    }
    console.log(mensagemPrograma);    
} else {
    console.log(mensagemErro);    
}