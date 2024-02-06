<template>
  <PageTitle title="Minhas iniciações científicas" />
  <v-container id="content">
    <v-row align="center" justify="center">
      <v-col
        v-for="(iniciacaoCientifica, i) in iniciacoesCientificas"
        :key="i"
        cols="auto"
      >
        <CardOferta
          :iniciacao-cientifica="iniciacaoCientifica"
          @click="this.$router.push(`/professor/ic/${iniciacaoCientifica.id}`)"
        />
      </v-col>
    </v-row>
    <v-container class="listaVazia" v-if="!iniciacoesCientificas.length">
      <v-card class="cardMensagem" :flat="true">
        <v-card-title style="color: #666666"
          >Nenhuma Ic encontrada</v-card-title
        >
        <v-card-actions class="cardAction">
          <v-btn @click="this.$router.push('/professor')"
            >Voltar para a home?</v-btn
          >
          <v-btn @click="this.$router.push('/professor/pedidos')"
            >Criar uma ic?</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </v-container>
  <v-snackbar v-model="snackbar" timeout="5000">
    <span> {{ error }}</span>
  </v-snackbar>
</template>

<script>
import { defineComponent } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import CardOferta from '@/components/CardOferta.vue'
import { getAllIcsAtivasByProfessor } from '@/services/IniciacaoCientificaService.js'

export default defineComponent({
  components: { CardOferta, PageTitle },
  data() {
    return {
      iniciacoesCientificas: [],
      error: '',
      snackbar: false,
    }
  },
  methods: {
    async getIcsByProfessor() {
      try {
        const iniciacoesCientificas = await getAllIcsAtivasByProfessor()
        this.iniciacoesCientificas = iniciacoesCientificas
      } catch (err) {
        if (err.response.data.status === 500) {
          this.error = 'Erro do servidor.'
          this.snackbar = !this.snackbar
        } else {
          this.error =
            'Não foi possível acessar as Iniciações Cientítficas.\n' +
            `Erro: ${err.response.data.message}`
          this.snackbar = !this.snackbar
        }
      }
    },
  },
  created() {
    this.getIcsByProfessor()
  },
})
</script>

<style scoped>
#content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.listaVazia {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cardMensagem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cardAction {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100px;
  Button {
    background-color: #cfeedc;
  }
}
</style>
