<template>

  <v-snackbar :timeout="1000 * 1000" v-model="snackbar">
    <span>{{ snackMessage }}</span>
  </v-snackbar>

  <v-card @click="redireciona">
    <div v-if="inscricao" class="divInscricao">
      <v-card-item style="width: 85%">
        <v-card-title>{{ inscricao.iniciacaoCientifica?.nome }}</v-card-title>
        <v-card-subtitle>{{
            inscricao.iniciacaoCientifica.professores[0]?.nome
          }}
        </v-card-subtitle>
      </v-card-item>
      <v-col class="more-container">
        <MoreIcon id="moreIcon" :items="items" />
      </v-col>
    </div>
    <v-card-item v-if="pedido" style="width: 85%">
      <v-card-title>{{ pedido.nome }}</v-card-title>
    </v-card-item>
  </v-card>
</template>

<script>
import MoreIcon from '@/icons/MoreIcon.vue'
import { cancelarIncricaoIC } from '@/services/inscricaoICService'
export default {
  name: 'PedidosListaCard',
  props: {
    inscricao: null,
    pedido: null,
  },
  methods: {
    async cancelarPedido() {
      try {
        const data = await cancelarIncricaoIC(this.inscricao.id)
  
        this.snackMessage = data
        this.snackbar = !this.snackbar
      } catch (err) {
        if (!err.response || err.response.status === 500) {
          this.snackMessage = "Erro no servidor";
        }
        else if (err.response.status === 404) {
          this.$router.push('/notfound');
        }
        else {
          this.snackMessage = err.response.data.message
        }
        this.snackbar = !this.snackbar
      }
      this.$emit('updatePage')
    },
    redireciona() {
      if (this.$props.pedido != null)
        this.$router.push(`/professor/ic/${this.$props.pedido?.id}`);
      else
        this.$router.push(`/aluno/ic/id/${this.$props.inscricao?.iniciacaoCientifica.id}`);
    }
  },
  data() {
    return {
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

.divInscricao {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

#moreIcon:hover {
  cursor: pointer;
}
</style>
