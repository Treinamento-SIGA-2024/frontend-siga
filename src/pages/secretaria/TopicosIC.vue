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
        <div class="submit">
          <v-btn class="salvar" @click="resetForm; toggle = !toggle">Salvar</v-btn>
          <v-btn class="cancelar" @click="resetForm; toggle = !toggle">Cancelar</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
  <v-container>
    <v-row align="center" justify="center">
      <v-card id="topico-card">
        <v-card-title id="topico-card-title"> Computação </v-card-title>
        <v-col id="more-container">
          <MoreIcon id="moreIcon" :items="items" />
        </v-col>
      </v-card>
    </v-row>
  </v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent style="width:450px">
        <v-card>
          <v-card-title id="text">
            Editar Tópico
          </v-card-title>
          <v-container>
            <v-row>
              <v-col >
                <v-text-field v-model="novoTitulo" label="Novo Título" required />
              </v-col>
            </v-row>
            <div class="submit">
              <v-btn class="salvar">Salvar</v-btn>
              <v-btn class="cancelar" @click="resetUpdate; dialog = !dialog">Cancelar</v-btn>  <!-- resetUpdate não está funcionando junto com o dialog, apenas separado -->
            </div>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>
</template>




<!-- v-for="topico in topicos" -->
<!--{{ topico.nome }}-->
<script>

import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import OfertaEstagio from "@/components/ofertaEstagio.vue";
import {getTopicos} from "@/services/topicosService.js";
import MoreIcon from '@/icons/MoreIcon.vue'

export default {
  data() {
    return {
      titulo: '',
      novoTitulo: '',
      toggle: false,
      dialog: false,
      topicos:[],
      items: [
        {
          title: 'Editar',
          action: this.editDialog,
        },
        {
          title: 'Deletar',
          action: this.deleteTopico,
        },
      ],
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
    MoreIcon,
  },

  methods: {
    resetForm() {
      this.titulo = '';
    },
    resetUpdate() {
      this.novoTitulo = '';
    },
    async getTopicos() {
      this.topicos = await getTopicos();
    },
    editDialog() {
      this.dialog = true
    }
  },
}
</script>

<style scoped>

#topico-card {
  display: flex;
  width: 340px;
  margin-top: 25px;
  border-radius: 20px;
  background-color: var(--green0);
}

#topico-card-title {
  align-self: center;
}

#more-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

#text {
  text-align: center;
}

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
  background-color: var(--green0);
  height: 160px;
  width: 310px;
}

#novoTopicoText {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.submit {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.salvar {
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

MoreIcon > items:hover  {
  cursor: pointer;
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

.HomeCard:hover {
  cursor: pointer;
  background-color: var(--green2);
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.22);
}

</style>