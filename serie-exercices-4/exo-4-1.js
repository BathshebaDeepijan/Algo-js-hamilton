const readlineSync = require('readline-sync');

function calculerSurface() {
  let longueur = parseFloat(readlineSync.question("Entrez la longueur du rectangle : "));
  let largeur = parseFloat(readlineSync.question("Entrez la largeur du rectangle : "));
  
  let surface = longueur * largeur;
  return surface;
}

let surfaceRectangle = calculerSurface();
console.log("La surface du rectangle est : " + surfaceRectangle);
