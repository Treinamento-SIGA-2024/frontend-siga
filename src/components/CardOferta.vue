<template>
  <v-container class="container">
    <v-card v-if="iniciacaoCientifica != null" class="card">
      <v-card-title> {{ iniciacaoCientifica.nome }}</v-card-title>
      <v-card-subtitle style="overflow: hidden;"> {{ iniciacaoCientifica.descricao }}</v-card-subtitle>
        <v-card-text class="ic-card-text">
          <div> Professores: {{ iniciacaoCientifica.professores.length }}</div>
          <div> Alunos: {{ iniciacaoCientifica.inscricoes.length }}</div>
      </v-card-text>
    </v-card>

    <v-card v-if="estagio != null" class="card">
      <v-card-title> {{ estagio.nome }}</v-card-title>
      <v-card-subtitle style="overflow: hidden;"> {{ estagio.empresa }}</v-card-subtitle>
        <v-card-text>
          <div> Cargo: {{ estagio.cargo }}</div>
          <div> Modalidade: {{ estagio.modalidade }}</div>
        </v-card-text>
    </v-card>
  </v-container>

</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  components: {},
  props: {
    iniciacaoCientifica: null,
    estagio: null,
  }
})
</script>

<style scoped>

.container {
  cursor: pointer;
}

.card {
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