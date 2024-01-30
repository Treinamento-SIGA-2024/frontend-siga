<template>
  <PageTitle title="TÓPICOS - IC"/>
  <div class="d-flex align-center flex-column">
    <v-btn id="novoTopicoBtn" v-if="!toggle" @click="toggle = !toggle">
      NOVO TÓPICO
    </v-btn>
    <v-card id="createTopico" v-show="toggle">
      <v-form id="form">
        <v-container id="novoTopicoText">
          <v-text-field id="novoTitulo" v-model="titulo" variant="outlined"
                        style="width: 90%; background-color: white; align-self: center"/>
        </v-container>

        <div id="submit">
          <v-btn id="salvar" @click="resetForm; toggle = !toggle">Salvar</v-btn>
          <v-btn class="cancelar" @click="resetForm; toggle = !toggle">Cancelar</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn class="HomeCard" @click="hidden = !hidden" style="height: 100px;" stacked elevation="4">
          Teste             <!--{{this.$props.title}}-->
          <div id="edit" v-show="hidden">
            <v-btn id="editar" @click="hidden = !hidden">Editar</v-btn>
            <v-btn class="cancelar" @click="hidden = !hidden">Cancelar</v-btn>
          </div>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import OfertaEstagio from "@/components/ofertaEstagio.vue";

export default {
  data() {
    return {
      titulo: '',
      toggle: false,
      hidden: false,
    }
  },

  name: "SecretariaTopicos",

  props: {
    title: String
  },

  components: {
    OfertaEstagio,
    PageTitle,
    ButtonCard,
  },

  methods: {
    resetForm() {
      this.titulo = '';
    },
  },
}
</script>

<style scoped>

#novoTopicoBtn {
  background-color: var(--green1);
}

#form {
  display: flex;
  flex-direction: column;
}

#novoTitulo {
  width: 80%;
  background-color: white;
  align-self: center
}

#createTopico {
  background-color: var(--green1);
  height: 160px;
  width: 310px;
}

#novoTopicoText {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#submit {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#salvar {
  width: 90px;
  color: white;
  background-color: #27AE60;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

.cancelar {
  width: 90px;
  color: white;
  background-color: #EB5757;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

#edit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#editar {
  width: 90px;
  color: white;
  background-color: #2752ae;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

.HomeCard {
  width: 310px;
  align-self: center;
  font-size: 16px;
  border-radius: 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  background-color: var(--green1);
}

.HomeCard:hover{
  cursor: pointer;
  background-color: var(--green2);
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.22);
}

</style>