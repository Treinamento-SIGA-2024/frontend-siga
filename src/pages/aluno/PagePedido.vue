<template>
  <div>
    <PedidoEstagio estagio=""/>

  </div>
</template>

<script>

import {defineComponent} from "vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import PedidoEstagio from "@/components/PedidoEstagio.vue";
import axios from "axios";


export default defineComponent({
  components: {PedidoEstagio, ButtonCard, PageTitle},
  methods:{
    async getIc(){

    },
    async getEstagio(){
      const response = await getEstagioById(1);

    }
  },
  data(){
    inici
  }
})
</script>


<style scoped>

</style>