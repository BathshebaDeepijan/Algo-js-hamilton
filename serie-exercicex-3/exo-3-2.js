let tableau = [1, 2, 3, 4, 5];
let tableauDeux = [100, 101, 102];
let somme = 0;
let sommeDeux = 0;

for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
}
let moyenne = somme / tableau.length;
console.log(moyenne);
for (let i = 0; i < tableauDeux.length; i++) {
    sommeDeux += tableauDeux[i];
}
let moyenneDeux = sommeDeux / tableauDeux.length;
console.log(moyenneDeux);
