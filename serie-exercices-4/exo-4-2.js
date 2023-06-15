// rand10()
// Description :
//    Cette fonction renvoie un entier aléatoire entre 1 et 10.

// Valeur de retour :
//    Un entier aléatoire entre 1 et 10.

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
  }
  let numeroAleatoire = rand10();
  console.log(numeroAleatoire);
  