<template>
  <v-card :flat="true">
    <v-card-title style="text-align: center">
      REQUERIMENTOS DE ESTÁGIO
    </v-card-title>
  </v-card>

  <v-container class="loadingContainer" v-if="this.loading">
    <v-progress-circular
      color="#C1DEBE"
      size="x-large"
      indeterminate
    ></v-progress-circular>
  </v-container>

  <v-container
    v-for="(estagio, i) in estagios"
    :key="i"
    class="buttonContainer"
  >
    <ButtonCard
      :title="estagio.aluno.nome"
      :data="estagio"
      @click="
        this.$router.push({
          name: 'SubmitEstagioCoordenador',
          params: { estagioId: estagio.id },
        })
      "
    />
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import { getEstagiosPendentes } from "@/services/coordenadorService.js";

export default defineComponent({
  components: { ButtonCard, PageTitle, Header },
  methods: {
    async getEstagios() {
      const estagios = await getEstagiosPendentes();
      this.estagios = estagios;
      this.loading = false;
    },
  },
  data() {
    return {
      estagios: [],
      loading: true,
    };
  },
  created() {
    this.getEstagios();
  },
});
</script>

<style scoped>
.buttonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loadingContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
