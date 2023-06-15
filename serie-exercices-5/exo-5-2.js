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

// // Utiliser la fonction pour générer un objet série TV
// const serieTv = askTvSerie();

// // Afficher l'objet au format JSON
// console.log(JSON.stringify(serieTv));

function randomizeCast(tvSerie) {
    // Copier la distribution de la série d'origine
    const distributionOriginale = tvSerie.distribution.slice();
  
    // Mélanger la distribution de manière aléatoire
    const distributionMelangee = [];
  
    while (distributionOriginale.length > 0) {
      const indexAleatoire = Math.floor(Math.random() * distributionOriginale.length);
      const acteur = distributionOriginale.splice(indexAleatoire, 1)[0];
      distributionMelangee.push(acteur);
    }
  
    // Mettre à jour la distribution de la série avec la distribution mélangée
    tvSerie.distribution = distributionMelangee;
  
    return tvSerie;
  }
  
  // Demander à l'utilisateur de saisir les données de la série télévisée
  const serieTv = askTvSerie();
  
  // Obtenir une nouvelle distribution mélangée
  const nouvelleDistribution = randomizeCast(serieTv);
  
  // Afficher la nouvelle distribution
  console.log("Nouvelle distribution :");
  for (let i = 0; i < nouvelleDistribution.distribution.length; i++) {
    console.log("- " + nouvelleDistribution.distribution[i]);
  }
  