<template>
  <div class="accueil">
      <div class="presentation">
        <img src="../assets/img/enfantaccueil.png" class="img-fluid" alt="">
          <div class="description">
            <img src="../assets/img/Global-gris.svg" class="img-fluid" alt="">
            <p class="preambule">Eperi&school est un programme d'acculturation numérique à destination des enfants d'écoles
              primaires du Nord Franche-Comté (du CE1 au CM2) <br>
              Ce dispositif à été mis en place dans la région Bourgogne Franche-Comté dans le cadre des Territoires D'innovations.</p>
            <p>En ce moment, le 1° trimestre 2020 du dispositif est en cours, pour les écoles des villes de Badevel, Dampierre les bois, Dasle, Grand-Charmont, Mathay, Montbéliard, Villars Sous Dampjoux (10 écoles)</p>
          </div>
      </div>

    <div id="zone1" class="zonetitre">
      <h2 >Présentation Générale</h2>
      <img src="../assets/img/enfantseule.png" class="img-fluid" alt="">
    </div>
    <div class="box video1">
      <video class="videoacculturation img-fluid" src="../assets/videos/Acculturation_video.mp4" controls></video>
        <div class="text1">
          <p>Il consiste en la mise en oeuvre de projets scolaires ou périscolaires, via des objets connectés, et la réalisation de supports de construction,
            via des imprimantes 3D, afin de faire découvrir la technologie à des enfants d'écoles primaires.</p>
        </div>
    </div>

    <div id="zone2" class="zonetitre second">
      <h2>Comment ça marche ?</h2>
      <img src="../assets/img/enfantseule2.png" class="img-fluid" alt="">
    </div>
    <div class="box video2" >
      <video  class="videocomment img-fluid" src="../assets/videos/Comment_ca_marche.mp4" controls></video>
      <div class="text2">
        <p>Il consiste en la mise en oeuvre de projets scolaires ou périscolaires, via des objets connectés, et la réalisation de supports de construction,
          via des imprimantes 3D, afin de faire découvrir la technologie à des enfants d'écoles primaires.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.presentation {
  width: 100%;
  height: 700px;
  display: flex;
}
.presentation > img {
  width: 1000px;
  height: 700px;
  animation: apparition 0.5s linear;
}
@keyframes apparition {
  0%{
    transform: translateX(-500px);
    opacity: 0;
  }
  50%{
    opacity: 0.3;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
.description {
  width: 80%;
  height: 700px;
  padding: 40px;
}
.description > img {
  width: 600px;
  height: 180px;
  margin-bottom: 40px;
  opacity: 0;
  animation: opacite 2s linear forwards;
  animation-delay: 1s;
}
@keyframes opacite {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.description > p {
  font-size: 1.3em;
}
html {
  scroll-behavior: smooth;
}
.fleche {
  margin: 30px 0 150px 0;
  animation: flottement 2s linear infinite;
}
@keyframes flottement {
  50%{
   transform: translateY(-10px);
  }
  100%{
    transform: translateY(0);
  }
}
.accueil {

}
.preambule {
  margin-bottom: 50px;
}
.box {
  width: 85%;
  height: 450px;
  background-color: #c2dbd8;
  margin: auto;
  display: flex;
}
h2 {
  margin-bottom: 50px;
}
.videoacculturation {
  transform: translate(-30px,-30px);
}
.text1 {
  width: 50%;
  height: 60%;
  border-right: 5px solid #86B8B2;
  border-bottom: 5px solid #86B8B2;
  margin-top: 30px;
  margin-left: 50px;
  padding: 50px;
  font-size: 1.4em;
}
.videocomment {
  transform: translate(30px, -30px);
}
.text2 {
  width: 50%;
  height: 60%;
  border-left: 5px solid #86B8B2;
  border-bottom: 5px solid #86B8B2;
  margin-top: 30px;
  margin-right: 50px;
  padding: 50px;
  font-size: 1.4em;
}
.box video {
  width: 700px;
  height: 400px;
}
.box.video1 {
  margin-top: 50px;
}
.box.video2 {
  flex-direction: row-reverse;
  margin-top: 50px;
  margin-bottom: 200px;
}
#zone2 {
  margin-top: 100px;
}
.zonetitre {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zonetitre h2 {
  margin-right: 100px;
}
.zonetitre.second{
  flex-direction: row-reverse;
}
.zonetitre.second > h2 {
  margin-left: 100px;
}


@media only screen and (max-width: 1155px) {
  .fleche {
    display: none;
  }
  .presentation {
    flex-direction: column;
  }
  .box.video1{
    flex-direction: column;
  }
  .videoacculturation {
    transform: translate(0,0);
    justify-self: center;
    align-self: center;
  }
  .text1 {
    border: none;
    width: 100%;
    height: 60%;
    margin-top: 30px;
    padding: 50px;
    font-size: 1.4em;
  }
  .box.video2 {
    flex-direction: column;
  }
  .zonetitre {
    margin-top: 650px;
  }
  .zonetitre img {
    width: 80px;
    height: 200px;
  }
  .zonetitre.second img {
    width: 80px;
    height: 200px;
  }
  #zone2 {
    margin-top: 200px;
  }
  .text2 {
    border: none;
    width: 100%;
    height: 60%;
    margin-top: 30px;
    padding: 50px;
    font-size: 1.4em;
  }
  .videocomment {
    transform: translate(0,0);
    justify-self: center;
    align-self: center;
  }
}
@media only screen and (max-width: 870px){
  #zone2 {
    margin-top: 300px;
  }
  .box {
    background-color: white;
  }
  .text1 {
    margin-left: 0;
  }
  .description {
    text-align: center;
    padding: 5px;
    margin: auto;
  }
  .zonetitre {
    margin-top: 500px;
  }
  .zonetitre.second {
    margin-top: 200px;
  }
}
/*
telephone
 */
@media only screen and (max-width: 380px) {
  .description > p {
    font-size: 1.1em;
  }
  .zonetitre {
    margin-top: 350px;
  }
  .zonetitre > h2 {
    margin-right: 20px;
    text-align: center;
  }
  .zonetitre > img {
    display: none;
  }
  .zonetitre.second > h2 {
    margin-left: 20px;
  }
  .text1,.text2 {
    margin: auto;
    font-size: 1.1em;
    padding: 10px;
  }
  #zone2 {
    margin-top: 50px;
  }
  html {
    width: 100%;
  }
  h2 {
    margin-bottom: 0;
  }

}

</style>
<script>
import Entete from "./Entete";
export default {
  components: {Entete}
}
</script>
