const readlineSync = require('readline-sync');

let numSemaine = parseInt(readlineSync.question("Entrez un chiffre de 1 à 7 svp ? "));

switch (numSemaine) {
    case 1:
        console.log("Le 1er jour de la semaine est lundi.");
        break;
        case 2:
        console.log("Le 2eme jour de la semaine est mardi.");
        break;
        case 3:
        console.log("Le 3eme jour de la semaine est mercredi.");
        break;
        case 4:
        console.log("Le 4eme jour de la semaine est jeudi.");
        break;
        case 5:
        console.log("Le 5eme jour de la semaine est vendredi.");
        break;
        case 6:
        console.log("Le 6eme jour de la semaine est samedi.");
        break;
        case 7:
        console.log("Le 7eme jour de la semaine est dimanche.");
        break;

    default:
        console.log("Votre nombre dois se trouver entre 1 et 7 svp !")
}