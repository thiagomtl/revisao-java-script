/*
Crie um programa de um estabelecimento que receba dados como
nome, a idade e se a pessoa é amiga do dono.
Retorne uma mensagem de acordo com as validações abaixo:
- Se a pessoa ter mais de 18 anos o acesso ao local será liberado.
- Pessoas com menos de 18 anos não acessam o local.
- Amigos do dono podem acessar o local independente da idade
- Caso a pessoa tenha mais de 18 anos e seja amigo do dono, ganhará
uma bebida.
*/

let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');
let idade = Number(entrada('Digite sua idade: '));
let amiga = entrada('Você é amigo do dono? 1-sim e 2-não: ');

let validaIdade = isNaN(idade);

if (nome === '' || idade === '' || amiga === '') {
    console.log('É necessário preencher todas as informações');
}
else if (isNaN(idade)) {
    console.log(`${nome} insira um valor numérico na idade!`);
}
else {
    if (amiga == 1) {
        console.log(`${nome}, você é amigo do dono e pode entrar independente da sua idade!`);

        if (idade >= 18) {
            console.log('Você ganhou uma bebida grátis, retire no bar!');
        }
    }

    else {
        if (idade >= 18) {
            console.log(`${nome}, você tem ${idade} anos e pode acessar a festa!`);
        } else {
            console.log(`${nome}, você tem ${idade} anos e não pode entrar na festa!`);
        }
    }
}