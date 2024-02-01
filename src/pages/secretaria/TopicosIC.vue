<template>
  <PageTitle title="TÓPICOS - IC"/>
  <div class="d-flex align-center flex-column">
    <v-btn id="novoTopicoBtn" @click="toggleCreate = !toggleCreate">
      NOVO TÓPICO
    </v-btn>
    <v-row justify="center">
      <v-dialog v-model="toggleCreate" persistent style="width:450px">
        <v-card>
          <v-card-title id="text"> Novo Tópico </v-card-title>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field v-model="tituloCreate" label="Título" required/>
              </v-col>
            </v-row>
            <div class="submit">
              <v-btn class="salvar" @click="this.createTopico(tituloCreate)" >Salvar</v-btn>
              <v-btn class="cancelar" @click="resetCreate">Cancelar</v-btn>
            </div>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
  <v-container v-if="!loading">
    <v-row align="center" justify="center">
      <v-card id="topico-card" v-for="topico in topicos">
        <v-card-title id="topico-card-title"> {{ topico.nome }}</v-card-title>
        <v-col id="more-container">
          <MoreIcon id="moreIcon" :items="items"/>
        </v-col>
        <v-row justify="center">
          <v-dialog v-model="toggleUpdate" persistent style="width:450px">
            <v-card>
              <v-card-title id="text">
                Editar Tópico
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field v-model="tituloUpdate" label="Novo Título" required/>
                  </v-col>
                </v-row>
                <div class="submit">
                  <v-btn class="salvar" @click="this.updateTopico(tituloUpdate)">Salvar</v-btn>
                  <v-btn class="cancelar" @click="resetUpdate">Cancelar</v-btn>
                </div>
              </v-container>
            </v-card>
          </v-dialog>
        </v-row>

        <v-row justify="center">
          <v-dialog v-model="deletarTopico" persistent style="width:350px">
            <v-card>
              <v-card-title id="text">
                Tem certeza?
              </v-card-title>
              <v-container>
                <div class="submit">
                  <v-btn class="salvar">Sim</v-btn>
                  <v-btn class="cancelar" @click="deletarTopico = !deletarTopico">Não</v-btn>
                </div>
              </v-container>
            </v-card>
          </v-dialog>
        </v-row>
      </v-card>
    </v-row>
  </v-container>

  <Loading v-if="loading" />
</template>

<script>

import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import OfertaEstagio from "@/components/ofertaEstagio.vue";
import {getTopicos, createTopico, updateTopicoById, deleteTopicoById} from "@/services/topicosService.js";
import MoreIcon from '@/icons/MoreIcon.vue';
import PopUp from "@/components/PopUp.vue";
import Loading from "@/components/Loading.vue";
export default {
  data() {
    return {
      idAtual: null,
      loading: true,
      tituloCreate: '',
      tituloUpdate: '',
      toggleCreate: false,
      toggleUpdate: false,
      deletarTopico: false,
      topicos: [],
      items: [
        {
          title: 'Editar',
          action: this.editTopico,
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
    PopUp,
    Loading,
  },

  created() {

    this.getTopicos();

  },

  methods: {
    resetUpdate() {
      this.tituloUpdate = '';
      this.toggleUpdate = !this.toggleUpdate;
    },
    resetCreate() {
      this.tituloCreate = '';
      this.toggleCreate = !this.toggleCreate;

    },
    async getTopicos() {
      this.loading = true;
      this.topicos = await getTopicos();
      this.loading = !this.loading;
    },
    async deleteTopico() {
      this.deletarTopico = true;
      await deleteTopicoById(id);
      this.deletarTopico = false;
      await this.getTopicos();
    },
    editTopico() {
      this.toggleUpdate = true
    },
    async createTopico(nome) {
      await createTopico(nome);
      this.resetCreate();
      await this.getTopicos();
    },
    async updateTopico(nome,id) {
      await updateTopicoById(nome,id);
      this.resetUpdate();
      await this.getTopicos();
    }
  },
}
</script>

<style scoped>

#topico-card {
  display: flex;
  width: 340px;
  margin: 15px;
  border-radius: 20px;
  background-color: var(--green0);
}

#topico-card-title {
  align-self: center;
  padding: 8px 0 10px 10px;
}

#more-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 12px 12px 12px 0;
}

#text {
  text-align: center;
}

#novoTopicoBtn {
  background-color: var(--green1);
  margin: 25px 20px 40px 20px;
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

</style>