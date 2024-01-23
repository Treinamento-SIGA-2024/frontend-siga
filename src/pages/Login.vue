<template>
  <PageTitle title="BEM-VINDO(A)"/>
  <ButtonCard title="Aluno" @click="this.$router.push('/aluno')"/>
  <ButtonCard title="Professor" @click="this.$router.push('/professor')"/>
  <ButtonCard title="Coordenador" @click="this.$router.push('/coordenador')"/>
  <ButtonCard title="Secretaria" @click="this.$router.push('/secretaria')"/>
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