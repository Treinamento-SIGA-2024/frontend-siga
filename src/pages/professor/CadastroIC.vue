<template>
  <v-container>
    <v-card :flat="true">
      <v-card-title>
        <div class="title">Cadastro</div>
      </v-card-title>
    </v-card>
  </v-container>

  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent class="form">
      <v-text-field
        v-model="registrationData.nome"
        label="Título da proposta"
        :rules="titleNameRules"
      ></v-text-field>
      <v-select
        chips
        v-model="registrationData.topicos"
        :multiple="true"
        label="Selecione o(s) tópico(s) da proposta"
        :items="topicos"
        return-object
        item-title="nome"
      >
      </v-select>
      <div class="inputWrapper">
        <v-text-field
          v-model="registrationData.remuneracao"
          label="R$"
          :rules="valueNameRules"
          width="30"
        ></v-text-field>
        <v-text-field
          v-model="registrationData.ch"
          label="Carga Horária"
          :rules="valueNameRules"
          width="30"
        ></v-text-field>
      </div>

      <v-container>
        <v-row>
          <v-col cols="12" sm="6" class="textArea">
            <v-textarea
              label="Descrição da proposta"
              auto-grow
              variant="outlined"
              rows="3"
              row-height="25"
              shaped
              v-model="registrationData.descricao"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>

      <v-btn type="submit" block class="mt-2 registrationBtn" @click="createIC"
        >Cadastrar Proposta</v-btn
      >
    </v-form>
  </v-sheet>

</template>

<script>
import Header from "@/components/Header.vue";

import {getTopicos} from '@/services/topicosService.js'
import {createIniciacaoCientifica} from "@/services/IniciacaoCientificaService.js";

export default {
  name: "CadastroProfessorIC",
  components: {
    Header,
  },
  created() {
    this.getTopics();
    setInterval(() => {console.log(this.registrationData)}, 4000)
  },
  data: () => ({
    titleNameRules: [
      (value) => {
        if (value !== "") return true;
        return "Por favor, preencha o título da proposta.";
      },
    ],
    topicos: [],
    registrationData: {
        nome: '',
        remuneracao: '',
        cargaHorariaSemanal: '',
        descricao: '',
        topicos: [],
        professores: []
      },
    valueNameRules: [
      (value) => {
        if (/[^a-zA-ZäöüßÄÖÜ]/.test(value)) return true;
        return "Valor inválido";
      },
    ],
  }),
  methods:{
    async getTopics(){
      const tops = await getTopicos();
      this.topicos = tops;
    },
    async createIC(){
      try{
       const create =  await createIniciacaoCientifica(this.registrationData);
       alert(create.response)
      }catch (e){

      }
    }
  }
};
</script>

<style scoped>
.title {
  color: #282828;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Source Sans Pro;
  color: #666666;
}
.registrationBtn {
  background-color: #cfeedc;
  font-family: Source Sans Pro;
}
.form {
  gap: 15px;
  display: flex;
  flex-direction: column;
}
.inputWrapper {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.textArea {
  min-width: 300px;
  @media (min-width: 600px) {
    padding: 0px;
  }
}
</style>
