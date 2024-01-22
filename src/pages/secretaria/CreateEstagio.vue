<template>
  <PageTitle title="NOVA PROPOSTA"/>

  <p>Função:</p>
  <v-text-field/>

  <p>Nome da Empresa:</p>
  <v-text-field/>

  <div class="camposRow">
    <div class="filhosRow">
      <p class="labelCampos">Remunerado? </p>
      <v-checkbox-btn :color="this.global.colors.green3" v-model="remunerado"
                      :label="remunerado ? 'Sim' : 'Não'"></v-checkbox-btn>
    </div>

    <div class="filhosRow">
      <p class="labelCampos">Valor da bolsa:</p>
      <v-text-field prefix="R$" :disabled="!remunerado"/>
    </div>
  </div>

  <div class="camposRow">
    <div class="filhosRow">
      <p>Carga Horária:</p>
      <v-text-field suffix="horas/sem"/>
    </div>

    <div class="filhosRow">
      <p>Vagas disponíveis:</p>
      <v-text-field/>
    </div>
  </div>

  <p>Modalidade:</p>
  <div id="selectDiv">
    <v-select class="select" label="Selecione"
              :items="['Remoto','Híbrido','Presencial']"/>
  </div>

  <p>Descrição:</p>
  <v-textarea/>

  <div id="submit">
    <ButtonCard id="salvar" title="Salvar"
                :style="{height: '50px'}"/>
    <ButtonCard id="cancelar" title="Cancelar"
                :style="{height: '50px'}"/>
  </div>

</template>

<script>

import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import '@mdi/font/css/materialdesignicons.css'

export default {
  name: "SecretariaInicial",
  data() {
    return {
      remunerado: false,
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