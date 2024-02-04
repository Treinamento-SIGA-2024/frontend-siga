<template>
  <v-card>
    <v-card-item style="width: 85%">
      <v-card-title>{{inscricaoEstagio.estagio.cargo}}</v-card-title>
      <v-card-subtitle>
        {{inscricaoEstagio.estagio.descricao}}</v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script>
export  default {
  name: "PedidosEstagioListaCard",
  props: {
    inscricaoEstagio: Object
  }
}
</script>

<style scoped>

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

.more-container {
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