<template>
  <main>
    <v-snackbar :timeout="2500" color="red" elevation="24" v-model="snackbar">
      <span>{{ snackMessage }}</span>
    </v-snackbar>
    <v-container style="width: 100%">
      <v-row>
        <v-col v-for="(inscricao, i) in this.$props.inscricoes" :key="i" cols="auto">
          <PedidosListaCard
            @updatePage="updatePage"
            :inscricao="inscricao"
          >
          </PedidosListaCard>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import PedidosListaCard from './PedidosListaCard.vue'

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
  props: {
    inscricoes: Array,
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
  border-radius: 0 15px 15px 15px;
}

@media (min-width: 1024px) {
  .v-container {
    width: 100vw;
  }
}
</style>
