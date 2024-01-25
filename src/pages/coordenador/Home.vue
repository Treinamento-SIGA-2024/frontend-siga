<template>
  <PageTitle title="PORTAL DO COORDENADOR" />
  <DadosPessoais />
  <ButtonCard title="Iniciação Científica" @click="redirectTo('/coordenador/ic')"/>
  <ButtonCard title="Estágio" @click="redirectTo('/coordenador/estagio')"/>
</template>

<script>

import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import DadosPessoais from "@/components/DadosPessoais.vue";
import ButtonCard from "@/components/ButtonCard.vue";

export default defineComponent({
  components: {ButtonCard, DadosPessoais, PageTitle, Header},
  methods: {
    redirectTo(path) {
      this.$router.push(path);
    }
  }
})
</script>

<style scoped>

</style>