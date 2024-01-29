<template>
  <v-card class="ic-card">
    <v-card-title> {{ iniciacaoCientifica.nome }}</v-card-title>
    <v-card-subtitle style="overflow: hidden;"> {{ iniciacaoCientifica.descricao }}</v-card-subtitle>
    <v-card-text class="ic-card-text">
      <div> Professores: {{ iniciacaoCientifica.professores.length }}</div>
      <div> Alunos: {{ iniciacaoCientifica.inscricoes.length }}</div>
    </v-card-text>
  </v-card>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  components: {},
  props: {
    iniciacaoCientifica: {
      type: Object,
      required: true
    }
  }

})
</script>

<style scoped>
.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
}

.ic-card {
  width: 340px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: #CFEEDC;
}

.ic-card-text {
  display: flex;
  justify-content: space-between;
}

</style>