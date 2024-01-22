<template>
  <PageTitle title="PROPOSTAS DE ESTÁGIO"/>
  <v-container>
    <v-row align="center" justify="center">
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

export default {
  name: "ListEstagioAluno",
  created() {
    this.getEstagios();
  },
  data() {
    return {
      estagios: [],
    }
  },
  components: {
    OfertaEstagio,
    Header,
    PageTitle,
    ButtonCard
  },
  methods: {
    async getEstagios() {
      const estagios = await getAllEstagios();
      this.estagios = estagios;
    }
  }
}
</script>

<style scoped>

.button {



}

</style>