<template>
  <div>
     <calendar :options="calendarOptions"/>
    <Ajout class="ajout" @addEvent="addEvent"/>
    <Pied/>
  </div>
</template>

<script>

import Ajout from './Ajout';


//Importation des différents plugins utilisés //
import Calendar from '@fullcalendar/vue';
import momentPlugin from '@fullcalendar/moment'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, {Draggable} from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';


export default {
  name: 'Fullcalendar',
  components: {
    Calendar, Ajout,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, momentPlugin],
        initialView: 'timeGridWeek',
        locale: frLocale,
        droppable: true,
        editable: true,
        selectable: true,
        eventClick: this.handleEventClick,
        headerToolbar: {
          left: "prev,next today",
          center: 'title',
          right: 'timeGridWeek listWeek timeGridDay'
        },
        events: [
          {
            title: 'Session 1',
            start: '2021-01-04T08:00:00',
            end: '2021-01-04T09:00:00'
          },
          {
            title: 'Session 2',
            start: '2021-01-07T15:00:00',
            end: '2021-01-07T16:00:00'
          },
          {
            title: 'Session 3',
            start: '2021-01-08T09:00:00',
            end: '2021-01-08T11:00:00'
          },
        ],
        windowResize: function(arg) {
          this.views = 'timeGridDay'
        },
        //fonction écoutant quand on lâche une session via le draggable afin de faire une notification + confirmation//
        eventDrop: function (info) {
          alert("La" + info.event.title + " à été déplacé au " + info.event.start.toISOString());

          if (!confirm("Etes vous sûr de modifier cette session?")) {
            info.revert();
          }
        },
        views: {
          timeGridWeek: {
            type: 'timeGrid',
            duration: {days: 6}, //nombre de jour dans la semaine//
            dateAlignment: 'week', //la vue utilisée du calendrier commence par le début de la semaine à savoir lundi//
            weekends: false,    //supprime les colonnes samedi dimanche//
            slotMinTime: '08:00:00', //heure de début de chaque jour à savoir 8h//
            slotMaxTime: '18:00:00', //heure de fin de chaque jour à savoir 18h//
            allDay: false,
          },
          listWeek: {
            type: 'timeGrid',
            duration: {days: 6}, //nombre de jour dans la semaine//
            dateAlignment: 'week', //la vue utilisée du calendrier commence par le début de la semaine à savoir lundi//
            weekends: false,    //supprime les colonnes samedi dimanche//
            slotMinTime: '08:00:00', //heure de début de chaque jour à savoir 8h//
            slotMaxTime: '18:00:00', //heure de fin de chaque jour à savoir 18h//
            allDay: false,
          },
          timeGridDay: {
            type: 'dayGrid',
            dateAlignment: "day", //la vue utilisée du calendrier commence par le début de la semaine à savoir lundi//
            slotMinTime: '08:00:00', //heure de début de chaque jour à savoir 8h//
            slotMaxTime: '18:00:00', //heure de fin de chaque jour à savoir 18h//
            allDay: false,
          },
        },
        height: 600, //hauteur du calendrier//
        nowIndicator: true,
        eventColor:  '#44b7aa',
      },
    }
  },
  methods: {
    handleEventClick: function (clickInfo) {      //fonction remove permettant de supprimer un évènement du calendrier //
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },
    addEvent(event) {  //fonction ajout permettant d'ajouter un évènement du calendrier (via un push dans le tableau) //
      console.log(event)
      this.calendarOptions.events.push({
        title: event.title,
        start: `${event.start}T${event.startStr}`,
        end: `${event.start}T${event.endStr}`,
        allDay: false,
      });
    },
  }
}
//écoute d'un évènement afin de déplacer un élément avec Draggable//

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/deep/ .fc {
  margin-top: 100px;
}
/deep/ .fc-timegrid{
  width: 80%;
  margin: auto;
}
/deep/ .fc-scrollgrid-sync-table {
  display: none;
}
/deep/ .fc-header-toolbar {
  width: 80%;
  margin: auto;
}
/deep/ .fc-button {
  background-color: #44b7aa;
  border: 1px solid #44b7aa;
}
/deep/ .fc-button:hover {
  transition: .2s;
  color: #86B8B2;
}
/*titrage des titres de jours*/
/deep/ .fc-col-header-cell-cushion {
  color: #373636;
}
/*titre de la semaine*/
/deep/ .fc-toolbar-title {
  color: #373636;
}

/* VUE LISTE CSS*/
/deep/ .fc-list {
  width: 80%;
  margin: auto;
}



@media only screen and (max-width: 1155px) {
  /deep/ .fc-timeGridWeek-button, /deep/ .fc-listWeek-button, /deep/ .fc-today-button {
    display: none;
  }
}


</style>
