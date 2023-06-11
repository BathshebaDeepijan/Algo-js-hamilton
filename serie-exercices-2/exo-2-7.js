const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Entrez un nombre : "));
let somme = 0;

for (let i = 0; i < n; i++) {
  let numero = parseInt(readlineSync.question("Entrez un nouveau numero : "));
  somme += numero;
}

console.log("La somme des nombres collectes est : " + somme);
