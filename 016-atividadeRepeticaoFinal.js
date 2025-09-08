/*
    crie um programa que peça ao usuário um valor inicial e um valor final para gerar tabuadas do valor inicial até o final.
    Exemplo: Digite o valor inicial: 2
    Digite o valor final: 5
*/

let entrada = require('prompt-sync')();

let tabuadainicial = parseInt(entrada('Digite o valor inicial: '));
let tabuadafinal = parseInt(entrada('Digite o valor final: '));

for (let contador = 1; contador <= 10; contador++) {
    console.log(`${tabuadainicial} x ${contador} = ${parseInt(tabuadainicial * contador)}`);
}

for (let i = tabuadainicial + 1; i <= tabuadafinal; i++)
    for (let contador = 1; contador <= 10; contador++) {
        console.log(`${i} x ${contador} = ${parseInt(i * contador)}`);
    }   
