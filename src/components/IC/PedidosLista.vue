<template>
  <main>
    <v-snackbar :timeout="2500" color="red" elevation="24" v-model="snackbar">
      <span>{{ snackMessage }}</span>
    </v-snackbar>
    <v-container>
      <v-row>
        <v-col v-for="(inscricao, i) in inscricoes" :key="i" cols="auto">
          <PedidosListaCard
            @updatePage="updatePage"
            :inscricao="inscricao"
          ></PedidosListaCard>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import PedidosListaCard from './PedidosListaCard.vue'
import { getAllInscricoes } from '@/services/inscricaoICService.js'

export default {
  name: 'PedidosLista',
  components: {
    PedidosListaCard,
  },
  data() {
    return {
      snackbar: false,
      snackMessage: '',
      inscricoes: [],
      alunoID: 20,
    }
  },

  created() {
    this.getInscricoes()
  },
  methods: {
    async getInscricoes() {
      try {
        const inscricoes = await getAllInscricoes(this.alunoID)
        this.inscricoes = inscricoes
        console.log(inscricoes)
      } catch (e) {
        console.log(e.response.data.message)
        this.snackMessage = e.response.data.message
        this.snackbar = !this.snackbar
      }
      this.$emit('updatePage')
    },
  },
}
</script>

<style scoped>
main {
  width: 100%;
}

.v-col-auto {
  width: 100%;
}

.v-container {
  background-color: #f3f3f3;
  border-radius: 0px 15px 15px 15px;
}

@media (min-width: 1024px) {
  .v-container {
    width: 100vw;
  }
}
</style>
