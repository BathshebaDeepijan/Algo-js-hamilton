const readlineSync = require('readline-sync');

let minAge = parseInt(readlineSync.question("Entrez un âge au hasard svp : "));
let maxAge = parseInt(readlineSync.question("Entrez un âge au hasard svp : "));
let currentAge = parseInt(readlineSync.question("Entrez votre âge svp : "));

if (minAge > maxAge) {
    console.log("Vous ne comprenez rien ! L'âge minimum ne peut pas être supérieur à l'âge maximum.");
    process.exit();
}

if (currentAge >= minAge && currentAge <= maxAge) {
    console.log("Votre âge est compris entre l'âge minimum et maximum requis. Vous avez " + currentAge + " ans.");
} else {
    console.log("Votre âge est en dehors de la plage d'âge requise.");
}
