<template>
  <main>
    <v-container>
      <v-row>
        <v-col cols="auto">
          <PedidosListaCard
            titulo="Nome da IC"
            professor="Nome do professor"
          ></PedidosListaCard>
          <PedidosListaCard
            titulo="Nome da IC"
            professor="Nome do professor"
          ></PedidosListaCard>
          <PedidosListaCard
            titulo="Nome da IC"
            professor="Nome do professor"
          ></PedidosListaCard>
          <PedidosListaCard
            titulo="Nome da IC"
            professor="Nome do professor"
          ></PedidosListaCard>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import PedidosListaCard from './PedidosListaCard.vue';

export default {
  name: 'PedidosLista',
  components: {
    PedidosListaCard,
  },
};
</script>

<style scoped>
main {
  width: 100%;
}

.v-col-auto {
  width: 100%;
}
</style>
