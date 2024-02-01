<template>
  <PageTitle title="Pedidos"></PageTitle>
  <PedidosBotoes></PedidosBotoes>
  <Loading v-if="loading"></Loading>

  <v-container v-for="(value, key) in inscricoesCategorizadas">
    <div class="aba" @click="abas[key] = !abas[key]"
         :style="{borderRadius: abas[key] ? '15px 15px 0 0' : '15px'}">
      <v-card-title>{{key}}</v-card-title>
      <ArrowDown v-if="!abas[key]"/>
      <ArrowUp v-if="abas[key]"/>
    </div>
    <PedidosLista v-show="!loading" v-if="abas[key]" @updatePage="stopLoading" :inscricoes="value"/>
  </v-container>

</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import PedidosBotoes from '@/components/IC/PedidosBotoes.vue'
import PedidosLista from '@/components/IC/PedidosLista.vue'
import Loading from '@/components/Loading.vue'
import ArrowDown from "@/icons/ArrowDown.vue"
import ArrowUp from "@/icons/ArrowUp.vue"
import {getAllInscricoes} from "@/services/inscricaoICService.js"
import {getAllSituacoes} from "@/services/situacaoInscricaoService.js"

export default {
  name: 'PedidosAluno',
  components: {
    PageTitle,
    PedidosBotoes,
    PedidosLista,
    Loading,
    ArrowDown,
    ArrowUp,
  },

  data() {
    return {
      loading: true,
      situacoes: [],
      inscricoes: [],
      inscricoesCategorizadas: {},
      abas: {},
      alunoID: 20,
    }
  },
  async created() {
    await this.getSituacoes();
    await this.getInscricoes();

    for (let inscricao of this.inscricoes) {
      this.inscricoesCategorizadas[inscricao.situacaoInscricao.descricao].push(inscricao);
    }
    this.loading = false;
  },
  methods: {
    stopLoading() {
      this.loading = !this.loading;
    },
    async getInscricoes() {
      try {
        const inscricoes = await getAllInscricoes(this.alunoID);
        this.inscricoes = inscricoes;
      } catch (e) {
        this.snackMessage = e.response.data.message;
        this.snackbar = !this.snackbar;
      }
      this.$emit('updatePage');
    },
    async getSituacoes() {
      this.situacoes = await getAllSituacoes();
      for (let situacao of this.situacoes) {
        this.inscricoesCategorizadas[situacao.descricao] = [];
        this.abas[situacao.descricao] = false;
      }
    },
  },
}
</script>

<style scoped>
@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}

.aba {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 13vw;
  padding: 0 5px 0 5px;

  border-radius: 15px 15px 0 0;
  background-color: #f3f3f3;
}

.aba:hover {
  cursor: pointer;
}
</style>
