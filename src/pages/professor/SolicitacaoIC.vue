<template>
  <v-card :flat="true" :font-family="this.global.font">
    <v-card-title style="text-align: center; margin: 17px 0">
      SOLICITAÇÃO IC
    </v-card-title>
  </v-card>

  <CardSolicitacaoIC/>
</template>

<script>
import {defineComponent} from "vue";
import DadosPessoais from "@/components/DadosPessoais.vue";
import CardSolicitacaoIC from "@/components/CardSolicitacaoIC.vue";

export default {
  components: {CardSolicitacaoIC, DadosPessoais}
}
</script>

<style scoped>
.v-card{
  color: #666666;
  font-weight: bold;
}
</style>