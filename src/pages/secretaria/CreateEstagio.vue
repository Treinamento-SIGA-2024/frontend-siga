<template>
  <Header/>
  <PageTitle title="NOVA PROPOSTA"/>

  <p>Proposta:</p>
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

  <p>Carga Horária:</p>
  <v-text-field/>

  <p>Vagas disponíveis:</p>
  <v-text-field/>

  <p>Modalidade:</p>
  <div>
    <v-select class="select" label="Selecione"
              :items="['Remoto','Híbrido','Presencial']"/>
  </div>

  <p>Descrição:</p>
  <v-textarea/>

  <ButtonCard id="salvar" title="Salvar"/>
  <ButtonCard id="cancelar" title="Cancelar"/>

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
  width: 100px;
  color: white;
  background-color: #27AE60;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

#cancelar {
  width: 100px;
  color: white;
  background-color: #EB5757;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

.labelCampos {
  width: fit-content;
}

.filhosRow {
  display: flex;
  flex-direction: column;
  width: 250px;
}

.camposRow {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}


</style>