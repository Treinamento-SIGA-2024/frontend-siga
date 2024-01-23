<template>
  <PageTitle title="BEM-VINDO(A)"/>
  <ButtonCard title="Aluno"/>
  <ButtonCard title="Professor"/>
  <ButtonCard title="Coordenador"/>
  <ButtonCard title="Secretaria"/>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";

  export default {
    name: "Login",
    components: {
      PageTitle,
      ButtonCard,
    }
  }
</script>

<style scoped>

</style>