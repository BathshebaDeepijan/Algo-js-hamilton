function rand10() {
    return Math.floor(Math.random() * 10) + 1;
  }
    function multiRand(n) {
    let numero = [];
    for (let i = 0; i < n; i++) {
      numero.push(rand10());
    }
    return numero;
  }
  
  const readlineSync = require('readline-sync');
  let quantiteNumeroAleatoire = parseInt(readlineSync.question("Combien de nombres aleatoires voulez-vous generer ? "));
  
  let numeroAleatoire = multiRand(quantiteNumeroAleatoire);
  console.log(numeroAleatoire);
  