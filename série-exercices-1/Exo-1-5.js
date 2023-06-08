const readlineSync = require('readline-sync');

let number1 = parseFloat(readlineSync.question("Entrez le premier nombre décimal : "));
let number2 = parseFloat(readlineSync.question("Entrez le deuxième nombre décimal : "));

let number1Entier = parseInt(number1);

let result = number1Entier * number2;

console.log("Le résultat de la multiplication " + result);
