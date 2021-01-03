<template>
  <div class="header">
    <div class="header-gauche">
      <img v-b-toggle.sidebar-variant src="../assets/img/bars-solid.svg" class="img-fluid" width="100px" height="100px">
      <b-sidebar id="sidebar-variant" bg-variant="black" text-variant="light" >
        <div class="px-3 py-2">
          <nav class="menu">
            <ul class="menusidebar">
              <router-link to="/">
                <li>Accueil</li>
              </router-link>
              <hr>
              <router-link to="/Connexion">
                <li>Se Connecter</li>
              </router-link>
              <hr>
              <router-link to="/Fullcalendar">
                <li>Emploi du temps</li>
              </router-link>
              <hr>
              <router-link to="/Mentions">
                <li>Mentions Légales</li>
              </router-link>
              <hr>
              <router-link to="/Conditions">
                <li>Conditions Générales d'Utilisations</li>
              </router-link>
              <hr>
              <router-link to="/Politiques">
                <li>Politiques de Confidentialités</li>
              </router-link>
              <li><img src="../assets/img/lesenfants.png" alt="les enfants" width="400px" height="400px"></li>
            </ul>
          </nav>
        </div>
      </b-sidebar>
    </div>
    <div class="header-droit">
        <img src="../assets/img/Global-blanc.svg"  class="img-fluid" alt="enfants avec livres">
    </div>
  </div>

</template>

<style>
hr {
  width: 200px;
  border: 1px solid #86B8B2;
}
#sidebar-variant {
  width: 100%;
  background-color: #44B7AA;
  color: #373636;
}
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

li {
  list-style-type: none;
  text-decoration: none;
  color: #373636;
  font-size: 2em;
  text-align: center;
}
li:hover {
  transition: .5s;
  transform: scale(1.05);
  text-decoration: none;
  text-transform: none;
}
.header {
  width: 100%;
  height: 100px;
  background-color: #44B7AA;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-gauche > img {
  width: 50px;
  height: 60px;
}
.header-droit {
  width: 600px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
}
.header-modal {
  margin: 50px;
  background-color: #DEECEA;
  color: #373636;
  border-radius: 50px;
  padding: 7px 15px 7px 15px;
  font-size: 1.2em;
}
.header-gauche {
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
}
/*
telephone
 */
@media only screen and (max-width: 380px) {
  #sidebar-variant {
    height: 100%;
  }
  .header-gauche {
  margin-left: 5px;
  }
  .header-droit > img {
    width: 200px;
    height: 200px;
  }
  li {
    font-size: 1.1em;
  }
}
</style>
