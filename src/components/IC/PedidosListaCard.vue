<template>
  <v-card>
    <v-card-item>
      <div>
        <v-card-title>{{ titulo }}</v-card-title>
        <v-card-subtitle>{{ professor }}</v-card-subtitle>
      </div>
      <div class="status"></div>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
  name: 'PedidosListaCard',
  props: {
    titulo: String,
    professor: String,
    situacao: String,
  },
};
</script>

<style scoped>
.status {
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  background: black;
}

.v-card-item {
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>
