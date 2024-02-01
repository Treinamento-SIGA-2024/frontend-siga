<template style="justify-content: center">
  <!-- Notificação de sucesso e erro do cadastro -->
  <v-snackbar v-model="snackbar" timeout="5000" color="red">
    <span> {{ snackMessage }}</span>
  </v-snackbar>

  <v-card :flat="true" :font-family="this.global.font">
    <v-card-title style="text-align: center; margin: 17px 0">
      REQUERIMENTOS IC
    </v-card-title>
  </v-card>

  <v-expansion-panels variant="accordion">
    <v-expansion-panel
      v-for="(iniciacao, index) in iniciacoesCientificas"
      :key="index"
    >
      <v-expansion-panel-title
        @click="toggleAccordion(index)"
        expand-icon="mdi-menu-down"
        collapse-icon="mdi-menu-up"
        class="title"
      >
        {{ iniciacao.nome }}
      </v-expansion-panel-title>
      <Transition name="fade">
        <div v-if="activeIndex === index">
          <v-row
            v-for="(inscricao, i) in iniciacao.inscricoes"
            :key="i"
            cols="auto"
          >
            <v-col>
              <CardSolicitacaoIC
                :inscricao="inscricao"
                :iniciacaoCientifica="iniciacao"
                @refreshSituacao=""
              />
            </v-col>
          </v-row>
          <v-row v-if="iniciacao.inscricoes < 1">
            <v-col>
              <span class="semRequerimentos">
                Não existem inscrições pendentes para essa Iniciação Científica
              </span>
            </v-col>
          </v-row>
        </div>
      </Transition>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-card :flat="true" class="semDados" v-if="iniciacoesCientificas.length < 1">
    <PopUp :acoes="metodos" />
  </v-card>
</template>

<script>
import DadosPessoais from "@/components/DadosPessoais.vue";
import CardSolicitacaoIC from "@/components/CardSolicitacaoIC.vue";
import {
  getAllIcPendentes,
  getAllRequerimentosIc,
} from "@/services/professorService.js";
import Loading from "@/components/Loading.vue";
import PopUp from "@/components/PopUp.vue";
import { getIcById } from "@/services/iniciacaoCientifica.js";
import { Transition } from "vue";

export default {
  components: { PopUp, Loading, CardSolicitacaoIC, DadosPessoais, Transition },
  data() {
    return {
      activeIndex: null,
      professorMatricula: "200000008",
      icId: "1",
      snackbar: false,
      snackMessage: "",
      inscricoes: [],
      iniciacoesCientificas: [],
      metodos: {
        msg: "Recarregar página?",
        aceitarAction: this.getRequerimentos,
        cancelarAction: this.redirecionar,
      },
    };
  },
  methods: {
    redirecionar(){
      this.$router.push('/professor');  
    },
    async getInscricoesIc() {
      const inscricoes = await getAllIcPendentes(
        this.professorMatricula,
        this.icId
      );
      const ic = await getIcById(this.icId);
      this.iniciacaoCientifica = ic;
      this.inscricoes = inscricoes;
    },
    toggleAccordion(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
    async getRequerimentos() {
      try {
        const iniciacoesCientificas = await getAllRequerimentosIc(
          this.professorMatricula
        );
        this.iniciacoesCientificas = iniciacoesCientificas;
      } catch (err) {
        if (err.response.data.status == 500) {
          this.snackMessage =
            "Não foi possível encontrar Iniciações Científicas!\n";
          this.snackbar = !this.snackbar;
        }
        console.log(err.response.data.status);
      }
    },
  },
  created() {
    this.getInscricoesIc();
    this.getRequerimentos();
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
.semRequerimentos {
  justify-content: center;
  display: flex;
  font-size: 18px;
  font-family: "Source Sans Pro";
  color: #666666;
  margin: 2%;
  @media (max-width: 600px) {
    padding: 15px;
    font-size: 16px;
  }
}
.title {
  font-family: "Source Sans Pro";
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
