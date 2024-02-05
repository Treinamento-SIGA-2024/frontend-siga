<template>
  <PageTitle title="Pedidos"></PageTitle>
  <v-container class="button-holder">
    <div class="button-container">
      <v-btn class="estagio" :class="{'button-selected': isEstagio}" @click="changeListagem('Estagio')"><span class="button-name">Estágio</span></v-btn>
      <v-btn class="ic" :class="{'button-selected': !isEstagio}" @click="changeListagem('IC')"><span class="button-name">IC</span></v-btn>
    </div>
  </v-container>
  <Loading v-if="loading"></Loading>

  <v-container v-show="!loading" v-if="!isEstagio" v-for="(value, key) in inscricoesCategorizadas">
    <div class="aba" @click="abas[key] = !abas[key]"
         :style="{borderRadius: abas[key] ? '15px 15px 0 0' : '15px'}">
      <v-card-title>{{key}}</v-card-title>
      <ArrowDown v-if="!abas[key]"/>
      <ArrowUp v-if="abas[key]"/>
    </div>
    <PedidosLista  v-if="abas[key]" @updatePage="stopLoading" :inscricoes="value"/>
  </v-container>

  <v-container v-show="!loading" v-if="isEstagio" v-for="(inscricaoEstagio, key) in inscricoesEstagioCategorizadas">
    <div class="aba" @click="abasEstagio[key] = !abasEstagio[key]"
         :style="{borderRadius: abasEstagio[key] ? '15px 15px 0 0' : '15px'}">
      <v-card-title>{{key}}</v-card-title>
      <ArrowDown v-if="!abasEstagio[key]"/>
      <ArrowUp v-if="abasEstagio[key]"/>
    </div>
  <pedidos-estagio-lista v-if="abasEstagio[key]" :inscricoes-estagio="inscricaoEstagio" @updatePage="stopLoading"></pedidos-estagio-lista>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import PedidosLista from '@/components/IC/PedidosLista.vue'
import Loading from '@/components/Loading.vue'
import ArrowDown from "@/icons/ArrowDown.vue"
import ArrowUp from "@/icons/ArrowUp.vue"
import {getAllInscricoes} from "@/services/inscricaoICService.js"
import {getAllSituacoes} from "@/services/situacaoInscricaoService.js"
import PedidosEstagioLista from "@/components/PedidosEstagioLista.vue";
import {getInscricaoEstagio} from "@/services/inscricaoEstagioService.js";

export default {
  name: 'PedidosAluno',
  components: {
    PedidosEstagioLista,
    PageTitle,
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
      inscricoesEstagio: [],
      inscricoesCategorizadas: {},
      inscricoesEstagioCategorizadas: {},
      abas: {},
      abasEstagio: {},
      alunoID: 9,
      isEstagio: false,
      botaoSelecionado: 'IC'
    }
  },
  async created() {
    await this.getSituacoes();
    await this.getInscricoes();
    await this.getInscricoesEstagio();

    for (let inscricao of this.inscricoes) {
      this.inscricoesCategorizadas[inscricao.situacaoInscricao.descricao].push(
        inscricao,
      )
    }

    for (let inscricaoEstagio of this.inscricoesEstagio){
      this.inscricoesEstagioCategorizadas[inscricaoEstagio.situacaoInscricao.descricao].push(inscricaoEstagio);
    }
    this.loading = false;
  },
  methods: {
    stopLoading() {
      this.loading = false
    },
    async getInscricoes() {
      try {
        const inscricoes = await getAllInscricoes(this.alunoID)
        this.inscricoes = inscricoes
      } catch (e) {
        this.snackMessage = e.response.data.message
        this.snackbar = !this.snackbar
      }
      this.$emit('updatePage')
    },
    async getSituacoes() {
      this.situacoes = await getAllSituacoes()
      for (let situacao of this.situacoes) {
        this.inscricoesCategorizadas[situacao.descricao] = [];
        this.inscricoesEstagioCategorizadas[situacao.descricao] = [];
        this.abas[situacao.descricao] = false;
        this.abasEstagio[situacao.descricao] = false;
      }
    },
    async getInscricoesEstagio() {
      const inscricoesEstagio = await getInscricaoEstagio();
      this.inscricoesEstagio = inscricoesEstagio;
      this.$emit('updatePage');
    },

    async changeListagem(botao) {
      if (this.botaoSelecionado !== botao) {
        this.botaoSelecionado = botao;
        this.isEstagio = (botao === 'Estagio');
      }
    }
  },
}
</script>

<style scoped>
.aba {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 0 5px;
  width: 220px;
  border-radius: 15px 15px 0 0;
  background-color: #f3f3f3;
}

.aba:hover {
  cursor: pointer;
}

.v-btn {
  align-self: center;
  box-shadow: 0px 0px 0px #00000026;
  border-radius: 0;
}
.v-btn:hover {
  cursor: pointer;
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px #00000052;
}

.estagio {
  background-color: #a8a8a866;
  border-top-left-radius: 23px;
}

.ic {
  background-color: #a8a8a866;
  border-top-right-radius: 23px;
}

.button-container {
  padding-top: 1rem;
}

.button-name {
  font-weight: bold;
}

.button-holder {
  padding: 0;
}

.button-selected {
  background-color: #F3F3F3;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
  .aba {
    width: 17vw;
  }
}
</style>
