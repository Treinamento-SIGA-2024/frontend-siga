<template>
  <div>
    <InfoPedido v-if="estagio || iniciacaoCientifica" 
    :estagio="this.estagio" 
    :iniciacaoCientifica="this.iniciacaoCientifica"/>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import InfoPedido from "@/components/InfoPedido.vue";
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
      } catch (err) {
        this.$emit("erro", err);
      }
    },
    async getEstagio(estagioId){
      try{
        const estagio = await getEstagioById(estagioId);
        this.estagio = estagio;
      } catch (err) {
        this.$emit("erro", err);
      }
    }
  },
  data(){
    return {
      iniciacaoCientifica: null,
      estagio: null,
    }
  }
})
</script>

<style scoped>

</style>