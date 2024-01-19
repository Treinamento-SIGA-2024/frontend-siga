<template>
  <Header />
  <PageTitle title="Ops... Página não encontrada."/>
  <ButtonCard title="Voltar para página inicial"/>
</template>

<script>
import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";

export default {
  name: "NotFound",
  components: {
    Header,
    PageTitle,
    ButtonCard,
  }
}
</script>

<style scoped>

</style>