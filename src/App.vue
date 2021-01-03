<template>
  <div id="app">
    <Entete/>
    <router-view/>
    <Pied/>
  </div>
</template>

<script>
import Calendar from "@fullcalendar/vue";
import Ajout from "./components/Ajout";
import Entete from "./components/Entete";
import Pied from "./components/Pied";
import Accueil from "./components/Accueil";

export default {
  name: 'App',
  components: {
    Calendar, Ajout, Entete, Pied,Accueil
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/*
@font-face {
  font-family: "Righteous-Regular";
  src: url("src/assets/typos/Righteous/Righteous-Regular.ttf") format("ttf");
}
@font-face {
  font-family: "Open Sans";
  src:   url("src/assets/typos/Work_Sans/static/WorkSans-Black.ttf") format("ttf"),
  url("src/assets/typos/Work_Sans/static/WorkSans-Black.ttf") format("ttf"),
  url("src/assets/typos/Work_Sans/static/WorkSans-Bold.ttf") format("ttf"),
  url("src/assets/typos/Work_Sans/static/WorkSans-Light.ttf") format("ttf"),
  url("src/assets/typos/Work_Sans/static/WorkSans-Medium.ttf") format("ttf");
}
 */
</style>
