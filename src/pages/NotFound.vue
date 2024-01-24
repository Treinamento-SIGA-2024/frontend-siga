<template>
  <PageTitle title="Ops... Página não encontrada."/>
  <ButtonCard @click="this.$router.push('/')" title="Voltar para página inicial"/>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";

export default {
  name: "NotFound",
  components: {
    PageTitle,
    ButtonCard,
  }
}
</script>

<style scoped>

</style>