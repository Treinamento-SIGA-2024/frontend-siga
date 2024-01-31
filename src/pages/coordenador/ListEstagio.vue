<template>
  <v-card :flat="true">
    <v-card-title style="text-align: center">
      REQUERIMENTOS DE ESTÁGIO
    </v-card-title>
  </v-card>

  <Loading v-if="this.loading" class="loadingContainer"/>
  <v-container>
    <v-row align="center" justify="center" v-if="estagios.length !== 0 && !erro">
      <v-col v-for="(estagio) in estagios" :key="estagio.id" cols="auto">
        <v-container
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
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import { getEstagiosPendentes } from "@/services/coordenadorService.js";
import Loading from "@/components/Loading.vue";
import CardOferta from "@/components/CardOferta.vue";

export default defineComponent({
  components: {CardOferta, Loading, ButtonCard, PageTitle, Header },
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
  height: 100vh;
}
</style>
