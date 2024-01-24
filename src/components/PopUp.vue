<template>
<v-container class="popUpExterno">
  <v-container class="iconTexto">
    <PopUpIcon style="background-color: #F5F5F5" />
    <v-card-title style="color: #666">{{ this.$props.acoes.msg }}</v-card-title>
  </v-container>

  <v-card-actions class="acaoBotoes">
    <v-btn class="aceitar" @click="this.$props.acoes.aceitarAction">Sim</v-btn>
    <v-btn class="cancelar" @click="this.$props.acoes.cancelarAction">Não</v-btn>
  </v-card-actions>
</v-container>
</template>

<script>

import mdiCheckCircleOutline from '@/icons/PopUpIcon.vue';
import PopUpIcon from "@/icons/PopUpIcon.vue";
export default {
  name:"PopUp",
  components: {PopUpIcon, mdiCheckCircleOutline},
  props:{
    acoes:{
      type:Object,
      required: true
    }
  }
}
</script>


<style scoped>
.iconTexto{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.popUpExterno{
  background-color: #FFF;
  max-width: 350px;
  border-radius: 10px;
}
.acaoBotoes{
  display: flex;
  justify-content: space-around;

}
.aceitar{
  width: 92px;
  height: 44px;
  background-color: #CFEEDC;
}
.cancelar{
  width: 92px;
  height: 44px;
  background-color: #4F4F4F;
  color:#F5F5F5;
}
</style>