<template>
  <div style="height: 100vh">
  <v-card :flat="true">
    <v-card-title style="text-align: center; color:#666666; font-weight: bold; margin: 27px">
      Formulário de estágio
    </v-card-title>
  </v-card>
  <v-container class="formEstagio">
    <v-card-text style="font-size: 17px; text-align: justify; margin:10px">
      Eu, {{ aluno.nome }}, matrícula {{ aluno.matricula }}, venho por meio desta solicitar à coordenação a aprovação do meu pedido de estágio na empresa
      {{ estagio?.empresa }}, desempenhando a função de {{ estagio?.cargo }}, no modelo {{ estagio?.modalidade }}, com uma carga horária de
      {{ estagio?.cargaHorariaSemanal }} horas semanais.
      <br><br>
      Espero que minha solicitação seja avaliada favoravelmente, considerando a relevâcia dessa experiêcia para o meu desenvolvimento acadêmico e profissional
      <br><br>
      Agradeço antecipadamente pela atenção dispensada.
    </v-card-text>
  </v-container>

  <v-card :flat="true">
    <v-card-actions class="buttons">
      <v-btn class="enviarForm" @click="togglePopUpAction = true">
        Enviar
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
  <v-container class="overflow" v-if="togglePopUpAction">
    <PopUp :acoes="{msg:'Tem certeza?',aceitarAction:postPedidoEstagio, cancelarAction: ()=> togglePopUpAction=false}"/>
  </v-container>
</template>

<script>

import {defineComponent} from "vue";
import ButtonCard from "@/components/ButtonCard.vue";
import PopUp from '@/components/PopUp.vue';
import {getEstagioById} from "@/services/Estagio.js";
import {createAlunoPedidoEstagio} from "@/services/inscricaoEstagioService.js";

export default defineComponent({
  components: {ButtonCard, PopUp},
  data(){
    return {
      togglePopUpAction:false,
      aluno:{
        nome:"Jorge",
        matricula:"999999999"
      },
      estagio:{},
      estagioId:1
    }
  },
  methods:{
    async getEstagio(id){
      try{
        const response = await getEstagioById(id);
        console.log(response)
        this.estagio = response;
      }catch(err){
        console.log(err)
      }
      
    },
    async postPedidoEstagio(){
      const body = {matricula: this.aluno.matricula, estagioId: this.estagio.id}
      const response = await createAlunoPedidoEstagio(body);
      console.log("Oi")
      console.log(response)
    }
  },
  created() {
    this.estagioId = this.$route.params.id;
    this.getEstagio(this.estagioId);
  }
})


</script>

<style scoped>
.formEstagio{
  display: flex;
  background: #D9D9D9;
  border-radius: 26px;
  width: 90%;
}

.enviarForm{
  background-color: #89C79E;
  font-weight: bold;
  color: #f2f2f2;
  width: 50%;
}

.buttons{
  display: flex;
  justify-content: center;
  margin: 15px 0;
}
.overflow{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


