const readlineSync = require('readline-sync');

let number1 = new Number(readlineSync.question("Entrez le premier nombre : "));
let number2 = new Number(readlineSync.question("Entrez le deuxième nombre : "));

let totalModulo = number1 % number2;

console.log(totalModulo);