//Service Fournisseur de données (Moodle)//
const host = 'http://localhost//eperischool//';

export default {
  //différent(s) adresse(s) des programme(s)//

  // titre application
  titre :                 "Eperi&School",

  // les différentes adresses des programmes
  deleteEvenement:         host+"deleteEvenement.php",
  updateEvenement:         host+"updateEvenement.php",


  // Messages de l'application
  message : {
    errCnx :        "Les éléments d'identification ne permettent pas d'accéder à l'application",
    errAcces :      "Vous n'avez pas les droits nécessaires pour accéder à cette page"
  }
}
