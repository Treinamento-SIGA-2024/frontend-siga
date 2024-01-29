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
          <v-text-field id="novoTitulo" v-model="titulo" variant="outlined"
                        :rules="[v => !!v || 'Este campo é obrigatório']" style="width: 80%"/>
        </div>

        <div id="submit">
          <v-btn id="salvar" @click="">Salvar</v-btn>
          <v-btn class="cancelar" @click="resetForm; toggle = !toggle">Cancelar</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <ButtonCard title="Teste" @click="hidden = !hidden"/>
        <div id="edit" v-if="hidden">
          <v-btn id="editar" @click="hidden = !hidden">Editar</v-btn>
          <v-btn class="cancelar" @click="hidden = !hidden">Cancelar</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container></template>

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
  width: 25vw;
}

#text {
  font-size: 1.2rem;
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
  justify-content: space-evenly;
}

#editar {
  width: 90px;
  color: white;
  background-color: #2752ae;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

</style>