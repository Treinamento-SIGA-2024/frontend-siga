<template>
  <div>
    <InfoPedido v-if="estagio || iniciacaoCientifica" :estagio="this.estagio" :iniciacaoCientifica="this.iniciacaoCientifica"/>
    <v-snackbar v-model="snackbar" :timeout=10000>
      <span> {{ error }}</span>
    </v-snackbar>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import InfoPedido from "@/components/InfoPedido.vue";
import axios from "axios";
import {getIcById} from "@/services/iniciacaoCientifica.js";
import {getEstagioById} from "@/services/Estagio.js";


export default defineComponent({
  name:"PagePedido",
  components: {InfoPedido, ButtonCard, PageTitle},
  created() {
    if(this.$route.params.estagioId){
      this.getEstagio(this.$route.params.estagioId);
    }else if(this.$route.params.icId){
      this.getIc(this.$route.params.icId);
    }
  },
  methods:{
    async getIc(icId){
      try{
        const ic = await getIcById(icId);
        this.iniciacaoCientifica = ic;
      }catch (err){
        this.error = err.response.data.message
        this.snackbar = !this.snackbar;
      }
    },
    async getEstagio(estagioId){
      try{
        const estagio = await getEstagioById(estagioId);
        this.estagio = estagio;
      }catch (err){
        this.error = err.response.data.message
        this.snackbar = !this.snackbar;
      }
    }
  },
  data(){
    return {
      iniciacaoCientifica: null,
      estagio: null,
      error: "",
      snackbar: false
    }
  }
})
</script>

<style scoped>

</style>