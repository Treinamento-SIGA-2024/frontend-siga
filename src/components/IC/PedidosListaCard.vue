<template>
  <v-card>
    <v-card-item>
      <v-card-title>{{ inscricao.iniciacaoCientifica?.nome }}</v-card-title>
      <v-card-subtitle>{{
        inscricao.iniciacaoCientifica.professores[0]?.nome
      }}</v-card-subtitle>
    </v-card-item>
    <v-col class="more-container">
      <MoreIcon :items="items" />
    </v-col>
  </v-card>
</template>

<script>
import MoreIcon from "@/icons/MoreIcon.vue";
export default {
  name: "PedidosListaCard",
  props: {
    inscricao: Object,
  },
  methods: {
    excluir() {
      
    },
  },
  data() {
    return {
      status: "",
      items: [
        {
          title: "excluir",
          action: this.excluir,
        },
        { title: "ola jorge" },
      ],
    };
  },
  components: { MoreIcon },
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
