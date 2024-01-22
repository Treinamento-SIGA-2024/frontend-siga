<template>
  <v-card :flat="true" :font-family="this.global.font">
    <v-card-title style="text-align: center; margin: 17px 0">
      SOLICITAÇÃO IC
    </v-card-title>
  </v-card>
  <v-container>
    <v-row v-for="(inscricao, i) in inscricoes" :key="i" cols="auto">
      <v-col>
        <CardSolicitacaoIC :inscricao="inscricao"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {defineComponent} from "vue";
import DadosPessoais from "@/components/DadosPessoais.vue";
import CardSolicitacaoIC from "@/components/CardSolicitacaoIC.vue";
import {getAllIcPendentes} from "@/services/professorService.js";

export default {
  components: {CardSolicitacaoIC, DadosPessoais},
  data(){
    return {
      professorMatricula: "200000001",
      icId: "1",
      inscricoes:[]
    }
  },methods:{
    async getInscricoesIc() {
      const inscricoes = await getAllIcPendentes(this.professorMatricula, this.icId);
      this.inscricoes = inscricoes;
    }
  },created() {
    this.getInscricoesIc();
  }
}


</script>

<style scoped>
.v-card{
  color: #666666;
  font-weight: bold;
}
</style>