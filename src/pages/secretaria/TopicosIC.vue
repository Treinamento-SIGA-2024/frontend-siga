<template>
  <PageTitle title="TÓPICOS - IC"/>
  <div class="d-flex align-center flex-column">
    <v-btn id="novoTopico" v-if="!toggle" @click="toggle = !toggle">
      NOVO TÓPICO
    </v-btn>
    <v-card id="createTopico" v-show="toggle">
      <v-form id="form">
        <div id="text">
          <p>Título</p>
          <v-text-field id="novoTitulo" variant="outlined"
                        :rules="[v => !!v || 'Este campo é obrigatório']" style="width: 80%"/>
        </div>

        <div id="submit">
          <v-btn id="salvar" @click="">Salvar</v-btn>
          <v-btn id="cancelar" @click="toggle = !toggle">Cancelar</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>

import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";

export default {
  data() {
    return {
      toggle: false
    }
  },
  name: "SecretariaTopicos",
  components: {
    PageTitle,
    ButtonCard,
  },
}
</script>

<style scoped>

#novoTopico {
  background-color: var(--green1);
}

#form {
  display: flex;
  flex-direction: column;
}

#createTopico {
  background-color: var(--green1);
  height: 150px;
  width: 50vw;
}

#submit {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#salvar {
  width: 150px;
  color: white;
  background-color: #27AE60;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

#cancelar {
  width: 150px;
  color: white;
  background-color: #EB5757;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

</style>