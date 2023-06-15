function moyenne(tableau) {
    if (tableau.length === 0) {
      return 0;
    }
    let somme = tableau.reduce((acc, val) => acc + val, 0);
    return somme / tableau.length;
  }
  
  function min(tableau) {
    if (tableau.length === 0) {
      return undefined;
    }
    return Math.min(...tableau);
  }
  
  function max(tableau) {
    if (tableau.length === 0) {
      return undefined;
    }
    return Math.max(...tableau);
  }
  
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
  let moyenneTableau = moyenne(numeroAleatoire);
  let minimum = min(numeroAleatoire);
  let maximum = max(numeroAleatoire);
  
  console.log("Nombres aléatoires générés : " + numeroAleatoire);
  console.log("Moyenne : " + moyenneTableau);
  console.log("Minimum : " + minimum);
  console.log("Maximum : " + maximum);
  