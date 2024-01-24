<template style="justify-content: center">
  <v-card :flat="true" :font-family="this.global.font">
    <v-card-title style="text-align: center; margin: 17px 0">
      SOLICITAÇÃO IC
    </v-card-title>
  </v-card>
  <v-container v-if="this.inscricoes.length">
    <v-row v-for="(inscricao, i) in inscricoes" :key="i" cols="auto">
      <v-col>
        <CardSolicitacaoIC :inscricao="inscricao" @refreshSituacao = "getInscricoesIc"/>
      </v-col>
    </v-row>
  </v-container>

  <v-card :flat="true"  class="semDados" v-if="!this.inscricoes.length">
    <PopUp :acoes="metodos"/>
  </v-card>
</template>

<script>
import DadosPessoais from "@/components/DadosPessoais.vue";
import CardSolicitacaoIC from "@/components/CardSolicitacaoIC.vue";
import {getAllIcPendentes} from "@/services/professorService.js";
import Loading from "@/components/Loading.vue";
import PopUp from "@/components/PopUp.vue";

export default {
  components: {PopUp, Loading, CardSolicitacaoIC, DadosPessoais},
  data(){
    return {
      professorMatricula: "200000001",
      icId: "1",
      inscricoes:[],
      metodos:{
        msg:"Recarregar página?",
        aceitarAction:this.getInscricoesIc,
        cancelarAction:''
      }
    }
  },methods:{
    async getInscricoesIc() {
      console.log("ooooi")
      const inscricoes = await getAllIcPendentes(this.professorMatricula, this.icId);

      console.log(inscricoes)
      this.inscricoes = inscricoes;
      console.log(this.inscricoes.length)
    }
  },created() {
    this.getInscricoesIc();
  }
}


</script>

<style scoped>
v-card{
  color: #666666;
  font-weight: bold;
}

.semDados{
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background-color:rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.recarregarBtn{
  width: 30%;
  background-color: blue;
}
</style>