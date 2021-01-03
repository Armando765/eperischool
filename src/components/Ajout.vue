<template>
  <div>
    <b-button v-b-modal.modal-1 class="ajouter">Ajouter une session</b-button>
    <b-modal ref="modal" id="modal-1" title="Créer une session">
      <b-form>
        <p class="my-4">Nom de la session</p>
        <b-input type="text" v-model="formEvent.title" name="nom" required/>
        <p class="my-4">Date de session</p>
        <b-input type="date" v-model="formEvent.start" value="00-00-000" name="anniversaire" required />
        <p class="my-4">Heure de début de session</p>
        <b-input  type="time" v-model="formEvent.startStr" value="T00:00:00" name="wakeup" required/>
        <p class="my-4">Heure de fin de session</p>
        <b-input  type="time" v-model="formEvent.endStr" value="T00:00:00" name="wakeup" required/>
      </b-form>
      <template #modal-footer>
        <b-button @click="$bvModal.hide('modal-1')">
          Annuler
          </b-button>
        <b-button type="submit" @click.prevent="addEvent(formEvent)" @click="$bvModal.hide('modal-1')">Créer</b-button>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formEvent : {
        title: "",
        start: "",
        startStr : "",
        endStr: ""
      }
    }
  },
  methods : {
    addEvent(formEvent){
      this.$emit('addEvent', formEvent)
    }
  }
}

</script>
<style scoped>
.ajout {
  display: flex;
  justify-content: center;
  margin: 60px 0 20px 0;
}
.ajouter {
  background-color: #44B7AA;
  border-radius: 50px;
  border: none;
  font-size: 1.2em ;
}
.ajouter:hover {
  transition: 1s;
  transform: scale(1.05);
}
</style>
