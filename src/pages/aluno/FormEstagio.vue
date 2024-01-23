<template>
  <div style="height: 100vh">
  <v-card :flat="true">
    <v-card-title style="text-align: center; color:#666666; font-weight: bold; margin: 27px">
      Formulário de estágio
    </v-card-title>
  </v-card>
  <v-container class="formEstagio">
    <v-card-text style="font-size: 17px; text-align: justify; margin:10px">
      Eu, [Nome do Aluno], matrícula [Matrícula do Aluno], venho por meio desta solicitar à coordenação a aprovação do meu pedido de estágio na empresa [Nome da Empresa], desempenhando a função de [Nome da Função], no modelo [Tipo do Modelo], com uma carga horária de [Carga Horária do Trabalho] horas semanais.
      <br><br>
      Espero que minha solicitação seja avaliada favoravelmente, considerando a relevâcia dessa experiêcia para o meu desenvolvimento acadêmico e profissional
      <br><br>
      Agradeço antecipadamente pela atenção dispensada.
    </v-card-text>
  </v-container>

  <v-card :flat="true">
    <v-card-actions class="buttons">
      <v-btn class="enviarForm">
        Enviar
      </v-btn>
    </v-card-actions>
  </v-card>
    <PopUp>
      <h2>meu popup</h2>
    </PopUp>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import ButtonCard from "@/components/ButtonCard.vue";
import PopUp from '@/components/PopUp.vue';

export default defineComponent({
  components: {ButtonCard},
  setup () {
    return {
      PopUp
    }
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
</style>