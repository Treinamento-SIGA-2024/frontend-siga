<template>
  <v-container class="container">
    <v-card v-if="iniciacaoCientifica != null" class="card">
      <v-card-title> {{ iniciacaoCientifica.nome }}</v-card-title>
      <v-card-subtitle style="overflow: hidden">
        {{ iniciacaoCientifica.descricao }}</v-card-subtitle
      >
      <v-card-text>
        <v-chip
          v-for="topico in iniciacaoCientifica.topicos"
          :key="topico.id"
          :color="randChipColor()"
          style="margin-bottom: 5px"
        >
          {{ topico.nome }}
        </v-chip>
      </v-card-text>
      <v-card-text class="ic-card-text">
        <div>Professores: {{ iniciacaoCientifica.professores.length }}</div>
        <div>Alunos: {{ iniciacaoCientifica.inscricoes.length }}</div>
      </v-card-text>
    </v-card>

    <v-card v-if="estagio != null" class="card">
      <v-card-title> {{ estagio.cargo }}</v-card-title>
      <v-card-subtitle style="overflow: hidden">
        {{ estagio.empresa }}</v-card-subtitle
      >
      <v-card-text>
        <div>Modalidade: {{ estagio.modalidade }}</div>
        <div>Vagas: {{ estagio.quantidadeVagas }}</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  props: {
    iniciacaoCientifica: null,
    estagio: null,
  },
  methods: {
    randChipColor() {
      const colors = ['primary', 'secondary', 'red', 'green']
      let randIndex = Math.floor(Math.random() * 3)

      return colors[randIndex]
    },
  },
})
</script>

<style scoped>
.container {
  cursor: pointer;
  padding-top: 16px;
}

.card {
  width: 90vw;
  max-width: 340px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: #cfeedc;
}

.ic-card-text {
  display: flex;
  justify-content: space-between;
}
</style>
