<template>

  <v-snackbar :timeout="5000" v-model="snackbar">
    <span>{{ snackMessage }}</span>
  </v-snackbar>

  <v-card>
    <v-card-item @click="this.$router.push(`/aluno/pedidos/estagio/${inscricaoEstagio.estagio.id}`)" style="width: 85%">
      <v-card-title>{{inscricaoEstagio.estagio.cargo}}</v-card-title>
      <v-card-subtitle>
        {{inscricaoEstagio.estagio.descricao}}</v-card-subtitle>
    </v-card-item>
    <v-col class="more-container">
      <MoreIcon id="moreIcon" :items="items" />
    </v-col>
  </v-card>
</template>

<script>
import MoreIcon from '@/icons/MoreIcon.vue'
import { cancelarPedidoEstagio } from '@/services/inscricaoEstagioService.js'

export  default {
  name: "PedidosEstagioListaCard",
  props: {
    inscricaoEstagio: null
  },

  methods: {
    async cancelarPedido() {
      try {
        const cancelado = await cancelarPedidoEstagio(this.inscricaoEstagio.id);

        this.snackMessage = cancelado;
        this.snackbar = !this.snackbar;
        this.$emit("updatePage")
      } catch (e) {
        this.snackMessage = e.response.data.message;
        this.snackbar = !this.snackbar;
      }
    }
  },

  data() {
    return {
      items: [
        {
          title: "Cancelar",
          action: this.cancelarPedido
        }
      ],
      snackbar: false,
      snackMessage: ""
    }
  },
  components: { MoreIcon }
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