const readlineSync = require('readline-sync');

let age = new Number(readlineSync.question("Entrez votre age : "));

if ((age >= 0) && (age <= 17)) {
    console.log("Tu es mineur !");
} else {
    console.log("Tu es majeur !");
}
