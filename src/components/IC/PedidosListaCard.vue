<template>
  <v-card>
    <v-card-item>
        <v-card-title>{{ titulo }}</v-card-title>
        <v-card-subtitle>{{ professor }}</v-card-subtitle>
    </v-card-item>
    <div class="status-container">
    <div class="status"></div>
    </div>
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
  margin-right: 20px;
}

.v-card {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}

.status-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}



</style>
