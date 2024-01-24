<template>
  <div>
  <v-card :flat="true" :font-family="this.global.font">
    <v-container class="infoCard">
      <v-card-title>aaaaa</v-card-title>
        <v-card-subtitle class="subtitle">
        Aluno: {{ this.$props?.inscricao.aluno.nome }} <br>
        Matrícula:{{ this.$props?.inscricao.aluno.matricula }}
        </v-card-subtitle>
      <v-container class="botoes">
        <v-btn class="aceitar" @click="abrirPopUp('ativo')">Aceitar</v-btn>
        <v-btn class="recusar" @click="abrirPopUp('recusar')">Negar</v-btn>
      </v-container>
    </v-container>
  </v-card>
  </div>
  <v-card :flat="true" class="confirmarAlteracao" v-if="togglePopUp">
    <PopUp :acoes="metodos"/>
  </v-card>
</template>

<script>

import {defineComponent} from "vue";
import PersonalData from "@/icons/PersonalData.vue";
import PopUp from "@/components/PopUp.vue";
import {putSituacaoInscricaoIcAluno} from "@/services/professorService.js";

export default defineComponent({
  components: {PopUp, PersonalData},
  data(){
    return{
      togglePopUp:false,
      situacao:"",
      metodos:{
        msg:`Alterar situacao do aluno ${this.$props.inscricao.aluno.nome}.`,
        aceitarAction:()=>this.alterarSituacao(),
        cancelarAction:()=>this.togglePopUp=false
      }
    }
  },
  props:{
    inscricao:{
      type: Object,
      required: true
    }
  },
  methods:{
    async alterarSituacao(){
      if(this.situacao === "aceitar"){
        const sendBody = {icId:1, matricula:"200000001",codigo:"001"}
        const resposta = await putSituacaoInscricaoIcAluno(this.$props.inscricao.id, sendBody)
        console.log(resposta)
      }if(this.situacao === "recusar"){
        const sendBody = {icId:1, matricula:"200000001",codigo:"002"}
        const resposta = await putSituacaoInscricaoIcAluno(this.$props.inscricao.id, sendBody)
        console.log(resposta)
      }
      this.$emit("refreshSituacao")
      this.togglePopUp = false;
    },
    abrirPopUp(situacao){
      if(situacao === "ativo"){
        this.metodos.msg = `Aceitar aluno ${this.$props.inscricao.aluno.nome} na ic.`
        this.situacao="aceitar"
        this.togglePopUp=true
      }else{
        this.metodos.msg = `Recusar aluno ${this.$props.inscricao.aluno.nome} na ic.`
        this.situacao="recusar"
        this.togglePopUp=true
      }
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

.confirmarAlteracao{
  position: fixed;
  z-index: 1;
  left: 0;
  top:0;
  height: 100%;
  width: 100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>