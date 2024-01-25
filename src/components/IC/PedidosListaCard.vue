<template>
  <v-card>
    <v-card-item>
      <v-card-title>{{ inscricao.iniciacaoCientifica?.nome }}</v-card-title>
      <v-card-subtitle>{{
        inscricao.iniciacaoCientifica.professores[0]?.nome
      }}</v-card-subtitle>
    </v-card-item>
    <div class="status-container">
      <div
        class="status"
        v-bind:class="{
          'status-ativo': inscricao.situacaoInscricao.descricao === 'Ativo',
          'status-recusado':
            inscricao.situacaoInscricao.descricao === 'Recusado',
          'status-pendente':
            inscricao.situacaoInscricao.descricao === 'Pendente',
        }"
      ></div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PedidosListaCard',
  props: {
    inscricao: Object,
  },
  data() {
    return {
      status: '',
    };
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

.status-ativo {
  background: #27ae60;
}

.status-recusado {
  background: #eb5757;
}

.status-pendente {
  background: #898989;
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
