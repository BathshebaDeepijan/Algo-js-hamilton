const readlineSync = require('readline-sync');

function askTvSerie() {
  const serie = {};

  // Demander le nom de la série
  serie.nom = readlineSync.question("Nom de la serie : ");

  // Demander l'année de production
  serie.annee = readlineSync.question("Annee de production : ");

  // Demander les noms des membres de la distribution
  serie.distribution = [];
  let membre;

  do {
    membre = readlineSync.question("Nom d'un membre de la distribution (ou 'stop' pour arreter) : ");

    if (membre !== "stop") {
      serie.distribution.push(membre);
    }
  } while (membre !== "stop");

  return serie;
}

// Utiliser la fonction pour générer un objet série TV
const serieTv = askTvSerie();

// Afficher l'objet au format JSON
console.log(JSON.stringify(serieTv));
