<template>
  <Header />

  <PageTitle title="COORDENADOR" />
  <DadosPessoais />
  <ButtonCard title="Iniciação Científica" />
  <ButtonCard title="Estágio" />

</template>

<script>

import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import DadosPessoais from "@/components/DadosPessoais.vue";
import ButtonCard from "@/components/ButtonCard.vue";

export default defineComponent({
  components: {ButtonCard, DadosPessoais, PageTitle, Header}
})
</script>

<style scoped>

</style>