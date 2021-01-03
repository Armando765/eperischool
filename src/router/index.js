import Vue from 'vue'
import Router from 'vue-router'
import Fullcalendar from '../components/Fullcalendar'
import Entete from '../components/Entete'
import Pied from '../components/Pied'
import Accueil from '../components/Accueil'
import Mentions from '../components/Mentions'
import Politiques from '../components/Politiques'
import Conditions from '../components/Conditions'
import Connexion from '../components/Connexion'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',   name: 'Accueil', component: Accueil},

    {path: '/Fullcalendar',   name: 'Fullcalendar', component: Fullcalendar},

    {path: '/Connexion',   name: 'Connexion', component: Connexion},

    {path: '/Entete',   name: 'Entete', component: Entete},
    {path: '/Pied',   name: 'Pied', component: Pied},

    {path: '/Mentions',   name: 'Mentions', component: Mentions},
    {path: '/Politiques',   name: 'Politiques', component: Politiques},
    {path: '/Conditions',   name: 'Conditions', component: Conditions},
  ]
})
