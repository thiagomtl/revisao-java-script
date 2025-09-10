/*
    crie um programa que peça ao usuário um valor inicial e um valor final para gerar tabuadas do valor inicial até o final.
    Exemplo: Digite o valor inicial: 2
    Digite o valor final: 5
*/

let entrada = require('prompt-sync')();

let tabuadainicial = parseInt(entrada('Digite o valor inicial: '));
let tabuadafinal = parseInt(entrada('Digite o valor final: '));

let contador = tabuadainicial;

while (contador <= tabuadafinal) {
    console.log(`\nTabuada do ${tabuadainicial}`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${tabuadainicial} x ${i} = ${parseInt(tabuadainicial * i)}`);
    }
    contador++;
    tabuadainicial++;
}
