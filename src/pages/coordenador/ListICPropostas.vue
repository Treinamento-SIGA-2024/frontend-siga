<template>
  <PageTitle title="Propostas de Iniciação Científica" />
  <div class="card-container">
    <v-row align="center" justify="center">
      <v-col v-for="(pedido, i) in this.propostasIcs" :key="i" cols="auto">
        <CardOferta
          @click="
            this.$router.push({
              name: 'SubmitICCoordenador',
              params: { icId: pedido.id },
            })
          "
          :iniciacao-cientifica="pedido"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import { getICsPendentes } from '@/services/coordenadorService.js'
import CardOferta from '@/components/CardOferta.vue'

export default {
  name: 'ListICPropostas',
  components: {
    PageTitle,
    CardOferta,
  },
  methods: {
    async getICsPendentes() {
      try {
        this.propostasIcs = await getICsPendentes();
      }
      catch (err) {
        this.$emit("erro", err);
      }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 0px;
}
</style>
