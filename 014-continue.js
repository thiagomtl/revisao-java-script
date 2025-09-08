let entrada = require('prompt-sync')();

let frase = entrada('Digite uma frase: ');

let contador = 0;

while (contador < frase.length) {
    console.log(frase[contador]);
    contador++;   
}