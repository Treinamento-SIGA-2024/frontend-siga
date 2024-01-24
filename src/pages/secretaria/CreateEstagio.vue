<template>

  <PageTitle title="NOVA PROPOSTA"/>
  <v-container>
    <v-form id="form">

      <v-btn id="limpar" @click="resetForm">Limpar</v-btn>

      <p>Função:</p>
      <v-text-field v-model="funcao" variant="outlined"/>

      <p>Nome da Empresa:</p>
      <v-text-field v-model="empresa" variant="outlined"/>

      <div class="camposRow">
        <div class="filhosRow">
          <p class="labelCampos">Remunerado? </p>
          <v-checkbox-btn :color="this.global.colors.green3" v-model="remunerado"
                          :label="remunerado ? 'Sim' : 'Não'"></v-checkbox-btn>
        </div>

        <div class="filhosRow">
          <p class="labelCampos">Valor da bolsa:</p>
          <v-text-field prefix="R$" :disabled="!remunerado" v-model="bolsa" variant="outlined"/>
        </div>
      </div>

      <div class="camposRow">
        <div class="filhosRow">
          <p>Carga Horária:</p>
          <v-text-field suffix="horas/sem" v-model="horas" variant="outlined"/>
        </div>

        <div class="filhosRow">
          <p>Vagas disponíveis:</p>
          <v-text-field v-model="vagas" variant="outlined"/>
        </div>
      </div>

      <p>Modalidade:</p>
      <div id="selectDiv">
        <v-select v-model="modalidade" variant="outlined"
                  class="select" label="Selecione" :items="itens"/>
      </div>

      <p>Descrição:</p>
      <v-textarea v-model="descricao" variant="outlined"/>

      <div id="submit">
        <ButtonCard id="salvar" title="Salvar"
                    :style="{height: '50px'}"
                    @click="submit"/>
        <ButtonCard id="cancelar" title="Cancelar"
                    :style="{height: '50px'}"
                    @click="this.$router.push('/secretaria')"/>
      </div>
    </v-form>
  </v-container>
</template>

<script>

import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import '@mdi/font/css/materialdesignicons.css'
import {createEstagio} from "@/services/Estagio.js";

export default {
  name: "SecretariaInicial",
  data() {
    return {
      funcao: '',
      empresa: '',
      remunerado: false,
      bolsa: '',
      horas: '',
      vagas: '',
      modalidade: null,
      itens: ['Remoto', 'Híbrido', 'Presencial'],
      descricao: '',
    }
  },

  methods: {
    resetForm() {
      this.funcao = '';
      this.empresa = '';
      this.remunerado = false;
      this.bolsa = '';
      this.horas = '';
      this.vagas = '';
      this.modalidade = null;
      this.descricao = '';
    },
    async submit() {
      await createEstagio({
        cargo: this.funcao,
        empresa: this.empresa,
        remuneracao: this.bolsa,
        cargaHorariaSemanal: this.horas,
        quantidadeVagas: this.vagas,
        modalidade: this.modalidade,
        descricao: this.descricao,
      });
      this.resetForm();
    }
  },

  components: {
    title: String,
    Header,
    PageTitle,
    ButtonCard,
  }
}

</script>

<style scoped>

.select {
  height: 20px;
  width: 500px;
}

#form {
  display: flex;
  flex-direction: column;
}

#limpar {
  font-size: 12px;
  width: 50px;
  height: 30px;
  color: white;
  background-color: #adadad;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
  align-self: flex-end;
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

#selectDiv {
  height: 80px;
}

#submit {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.labelCampos {
  width: fit-content;
}

.filhosRow {
  display: flex;
  flex-direction: column;
  width: 45%;
}

.camposRow {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}


</style>