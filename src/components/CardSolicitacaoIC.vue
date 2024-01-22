<template>
  <div>
  <v-card :flat="true" :font-family="this.global.font">
    <v-container class="infoCard">
      <v-card-title>{{ this.$props?.inscricao.iniciacaoCientifica.nome }}</v-card-title>
        <v-card-subtitle class="subtitle">
        Aluno: {{ this.$props?.inscricao.aluno.nome }} <br>
        Matrícula:{{ this.$props?.inscricao.aluno.matricula }}
        </v-card-subtitle>
      <v-container class="botoes">
        <v-btn class="aceitar">Aceitar</v-btn>
        <v-btn class="recusar">Negar</v-btn>
      </v-container>
    </v-container>
  </v-card>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import PersonalData from "@/icons/PersonalData.vue";

export default defineComponent({
  components: {PersonalData},
  props:{
    inscricao:{
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>
.infoCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #CFEEDC;
  width: 90%;
  height: 148px;
  border-radius: 10px;
  margin-top: 20px;
}
.botoes{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  button{
    width: 103px;
    color:#f2f2f2;
    font-weight: bold;
    font-size: 17px;
  }
}
.subtitle{
  width: 100%;
  font-size: 16px;
  font-weight: bold;
}
.aceitar{
  background-color: #27AE60;
}

.recusar{
  background-color: #EB5757;
}
</style>