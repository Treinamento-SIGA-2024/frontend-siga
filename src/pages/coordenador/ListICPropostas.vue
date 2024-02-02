<template>
  <div>
    <PageTitle title="Propostas de Iniciação Científica" />
    <div class="card-container">
      <v-card
        v-for="p in this.propostasIcs"
        @click="
          this.$router.push({
            name: 'SubmitICCoordenador',
            params: { icId: p.id },
          })
        "
        class="ic-card"
      >
        <v-card-title> {{ p.nome }} </v-card-title>
        <v-card-subtitle>
          Professor: {{ p.professores[0].nome }}
        </v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import { getICsPendentes } from '@/services/coordenadorService.js'

export default {
  name: 'ListICPropostas',
  components: {
    PageTitle,
  },
  methods: {
    async getICsPendentes() {
      this.propostasIcs = await getICsPendentes()
    },
  },
  created() {
    this.getICsPendentes()
  },
  data() {
    return {
      propostasIcs: [],
    }
  },
}
</script>

<style scoped>
.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
}
.ic-card {
  width: 340px;
  margin-top: 25px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 20px;
  background-color: #cfeedc;
  text-align: center;
}
</style>
