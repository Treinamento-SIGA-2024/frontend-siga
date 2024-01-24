<template>
  <PageTitle title="PROPOSTAS DE ESTÁGIO" />
  <PopUpErro :erro="erro"/>
  <Loading v-if="estagios.length === 0 && !erro"/>
  <v-container>
    <v-row align="center" justify="center" v-if="estagios.length !== 0 && !erro">
      <v-col v-for="(estagio) in estagios" :key="estagio.id" cols="auto">
        <OfertaEstagio :estagio="estagio" @click="this.$router.push(`/aluno/estagio/id/${estagio.id}`)"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Header from "@/components/Header.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import PageTitle from "@/components/PageTitle.vue";
import {getAllEstagios} from "@/services/Estagio.js";
import OfertaEstagio from "@/components/ofertaEstagio.vue";
import Loading from "@/components/Loading.vue";
import PopUpErro from "@/components/PopUpErro.vue";

export default {
  name: "ListEstagioAluno",
  created() {
    this.getEstagios();
  },
  data() {
    return {
      estagios: [],
      erro: false,
    }
  },
  components: {
    PopUpErro,
    Loading,
    OfertaEstagio,
    Header,
    PageTitle,
    ButtonCard
  },
  methods: {
    async getEstagios() {
      try {
        const estagios = await getAllEstagios();
        this.estagios = estagios;
      }
      catch (e) {
        this.erro = e.response.data.message;
      }
    }
  }
}
</script>

<style scoped>

</style>