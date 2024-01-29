<template>
  <PageTitle title="INICIAÇÃO CIENTÍFICA"/>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(iniciacaoCientifica, i) in iniciacoesCientificas" :key="i" cols="auto">
        <CardIC :iniciacao-cientifica="iniciacaoCientifica" @click="this.$router.push(`/professor/ic/${iniciacaoCientifica.id}`)"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {defineComponent} from "vue";
import PageTitle from "@/components/PageTitle.vue";
import CardIC from "@/components/CardIC.vue";
import {getAllIcsAtivasByProfessor} from "@/services/IniciacaoCientificaService.js";

export default defineComponent({
  components: {CardIC, PageTitle},
  data() {
    return {
      iniciacoesCientificas: []
    }
  },
  methods: {
    async getIcsByProfessor() {
      try {
        const iniciacoesCientificas = await getAllIcsAtivasByProfessor("200000001");
        this.iniciacoesCientificas = iniciacoesCientificas;
      } catch (err) {
        console.log(err)
      }
    }
  },
  created() {
    this.getIcsByProfessor();
  }
})
</script>

<style scoped>

.containerCards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  @media (max-width: 700px) {
    .containerCards {
      width: 80%;
      flex-direction: row;
      background-color: blue;
    }
  }
}
</style>