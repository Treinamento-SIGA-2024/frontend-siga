<template>
  <v-snackbar :timeout="5000" :color="cor" elevation="24" v-model="snackbar">
    <span>{{ snackMessage }}</span>
  </v-snackbar>
  <v-card>
    <v-card-item>
      <v-card-title>{{ inscricao.iniciacaoCientifica?.nome }}</v-card-title>
      <v-card-subtitle>{{
        inscricao.iniciacaoCientifica.professores[0]?.nome
      }}</v-card-subtitle>
    </v-card-item>
    <v-col class="more-container">
      <MoreIcon id="moreIcon" :items="items" />
    </v-col>
  </v-card>
</template>

<script>
import MoreIcon from '@/icons/MoreIcon.vue'
import { cancelarIncricaoIC } from '@/services/inscricaoICService'
export default {
  name: 'PedidosListaCard',
  props: {
    inscricao: Object,
  },
  methods: {
    async cancelarPedido() {
      try {
        const data = await cancelarIncricaoIC(this.inscricao.id)
        console.log(data)
        this.cor = 'green'
        this.snackMessage = data
        this.snackbar = !this.snackbar
      } catch (e) {
        console.log(e.response.data.message)
        this.cor = 'red'
        this.snackMessage = e.response.data.message
        this.snackbar = !this.snackbar
      }
      this.$emit('updatePage')
    },
  },
  data() {
    return {
      cor: '',
      snackMessage: '',
      snackbar: false,
      status: '',
      items: [
        {
          title: 'Cancelar',
          action: this.cancelarPedido,
        },
      ],
    }
  },
  components: { MoreIcon },
}
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

#moreIcon:hover {
  cursor: pointer;
}
</style>
