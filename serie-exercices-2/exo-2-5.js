const readlineSync = require('readline-sync');

let reponseCorrecte = "42";
let reponseUtilisateur ="" ;

while (reponseUtilisateur !== reponseCorrecte) {
  reponseUtilisateur = readlineSync.question("Quelle est la bonne reponse ? ");
}

console.log("Bravo ! Vous avez trouvé la bonne reponse.");
