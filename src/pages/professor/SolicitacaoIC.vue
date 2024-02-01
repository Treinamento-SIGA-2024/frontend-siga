<template style="justify-content: center">
  <v-card :flat="true" :font-family="this.global.font">
    <v-card-title style="text-align: center; margin: 17px 0">
      SOLICITAÇÃO IC
    </v-card-title>
  </v-card>

  <v-expansion-panels variant="accordion">
    <v-expansion-panel
      v-for="(iniciacao, index) in iniciacoesCientificas"
      :key="index"
    >
      <v-expansion-panel-title @click="toggleAccordion(index)" expand-icon="mdi-menu-down" collapse-icon="mdi-menu-up">
        {{ iniciacao.nome }}
      </v-expansion-panel-title>
      <div v-if="activeIndex === index">
        <v-row v-for="(inscricao, i) in iniciacao.inscricoes" :key="i" cols="auto">
          <v-col>
            <CardSolicitacaoIC
              :inscricao="inscricao"
              :iniciacaoCientifica="iniciacao"
              @refreshSituacao=""
            />
          </v-col>
        </v-row>
      </div>
    </v-expansion-panel>
  </v-expansion-panels>


  <v-card :flat="true" class="semDados" v-if="!this.iniciacoesCientificas">
    <PopUp :acoes="metodos" />
    <Loading/>
  </v-card>
</template>

<script>
import DadosPessoais from "@/components/DadosPessoais.vue";
import CardSolicitacaoIC from "@/components/CardSolicitacaoIC.vue";
import { getAllIcPendentes } from "@/services/professorService.js";
import Loading from "@/components/Loading.vue";
import PopUp from "@/components/PopUp.vue";
import { getIcById } from "@/services/iniciacaoCientifica.js";

export default {
  components: { PopUp, Loading, CardSolicitacaoIC, DadosPessoais },
  data() {
    return {
      activeIndex: null,
      professorMatricula: "200000001",
      icId: "1",
      inscricoes: [],
      iniciacoesCientificas: [
        {
          id: 1,
          nome: "Primeira IC do mundo",
          inscricoes: [{ id: 1, aluno: "Vitória", matricula:"2566662" }],
        },
        {
          id: 2,
          nome: "Projeto de Pesquisa em Biologia",
          inscricoes: [
            { id: 2, aluno: "João", matricula:"25695636" },
            { id: 3, aluno: "Maria", matricula:"25695636" },
          ],
        },
        {
          id: 3,
          nome: "Iniciação Científica em Física",
          inscricoes: [
            { id: 4, aluno: "Pedro", matricula:"12036589" },
            { id: 5, aluno: "Ana", matricula:"12036589" },
            { id: 6, aluno: "Carlos", matricula:"12036589" },
          ],
        },
      ],
      metodos: {
        msg: "Recarregar página?",
        aceitarAction: this.getInscricoesIc,
        cancelarAction: "",
      },
    };
  },
  methods: {
    async getInscricoesIc() {
      console.log("ooooi");
      const inscricoes = await getAllIcPendentes(
        this.professorMatricula,
        this.icId
      );
      const ic = await getIcById(this.icId);

      console.log(inscricoes);
      console.log(ic);
      this.iniciacaoCientifica = ic;
      this.inscricoes = inscricoes;
      console.log(this.inscricoes.length);
    },
    toggleAccordion(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
  },
  created() {
    this.getInscricoesIc();
  },
};
</script>

<style scoped>
v-card {
  color: #666666;
  font-weight: bold;
}

.semDados {
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.recarregarBtn {
  width: 30%;
  background-color: blue;
}
</style>
