<template>
  <div class="footer">
    <div class="footer-card">
      <h4>Avec le soutien de</h4>
      <ul>
        <li><a href="http://www.agglo-montbeliard.fr/"><img  class="img-fluid" src="../assets/img/partenaires/logo-pma-header.png" alt=""></a> <a href="http://www.grandbelfort.fr/"><img class="img-fluid" src="../assets/img/partenaires/logo-gb.png" alt=""></a></li>
        <li><a href="https://www.bourgognefranchecomte.fr/"><img class="img-fluid" src="../assets/img/partenaires/logo_bfc.png" alt=""></a> <a href="https://www.banquedesterritoires.fr/"><img class="img-fluid" src="../assets/img/partenaires/bdt.png" alt=""></a></li>
      </ul>
    </div>
    <div class="footer-card">
    <h4>Dans le cadre de</h4>
    <ul>
      <li><a href="http://www.francas.asso.fr/"><img src="../assets/img/partenaires/gpi.jpg" alt=""></a></li>
    </ul>
  </div>
    <div class="footer-card">
      <h4>Nous contacter</h4>
      <div class="mail">
        <p>Projet E.peri&School</p>
        <img src="../assets/img/email.png" alt="mail"> <a href="mailto:e-peri-school@agglo-montbeliard.fr">e-peri-school@agglo-montbeliard.fr</a>
      </div>
        <h4 class="propos">A Propos</h4>
      <ul class="politique">
        <li><a href="">Mentions Légales</a></li>
        <li><a href="">Conditions Générales d'Utilisations</a></li>
        <li><a href="">Politique de Confidentialité</a></li>
      </ul>
    </div>
  </div>
</template>

<style>
.footer {
  width: 100%;
  height: 100%;
  background-color: #44B7AA;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
}
.footer-card {
  height: 100%;
  flex: 1 1 0;
}
.footer-card > ul {
  list-style-type: none;
}
.footer-card > ul > li > a > img {
  margin: 20px;
}
.footer-card > ul > li {

}
.footer-card > ul > li > a > img:hover {
  transform: scale(1.05);
  transition: .5s;
}
.footer-card > h4 {
  margin-top: 35px;
  text-align: center;
  font-size: 1.6em;
}
.politique {
  margin: 50px;
}
.propos {
  margin-top: 35px;
}
.politique > li {
  margin: 20px;
  font-size: 1.3em;
  text-decoration: none;
  color: #373636;
}
.politique > li > a {
  text-decoration: none;
  color: #373636;
}
.mail {
  text-align: center;
  font-size: 1.3em;
}
.mail > a {
  color: #373636;
}
@media only screen and (max-width: 865px){
.footer {
  margin-top: 400px;
}


}
@media only screen and (max-width: 385px){
  .footer {
    margin-top: 50px;
  }
  .politique {
    padding: 0;
  }
}
</style>
