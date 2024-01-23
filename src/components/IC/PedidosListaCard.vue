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
  background-color: #cfeedc;
  border-radius: 23px;
}

.v-card:hover {
  cursor: pointer;
}

.status-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.v-card-title {
  font-weight: bold;
  font-size: 1.2rem;
}
.v-card-subtitle {
  font-weight: bold;
  color: #6a6a6a;
}
</style>
