<template>
  <Header/>
  <PageTitle title="PORTAL DA SECRETARIA"/>
  <DadosPessoais/>
  <ButtonCard @click="" title="Estágio"/>
</template>

<script>
import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import DadosPessoais from "@/components/DadosPessoais.vue";
import ButtonCard from "@/components/ButtonCard.vue";

export default {
  name: "SecretariaInicial",
  components: {
    title: String,
    Header,
    PageTitle,
    DadosPessoais,
    ButtonCard,
  }
}
</script>

<style scoped>

</style>