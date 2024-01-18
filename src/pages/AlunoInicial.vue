<template>
  <v-app>
    <Header />

      <PageTitle title="ALUNO"/>
      <DadosPessoais />
      <ButtonCard title="Iniciação Científica"/>
      <ButtonCard title="Estágio"/>
      <ButtonCard title="Pedidos"/>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue"
import PageTitle from "@/components/PageTitle.vue"
import ButtonCard from "@/components/ButtonCard.vue"
import DadosPessoais from "@/components/DadosPessoais.vue";


  export default  {
    name: "AlunoInicial",
    components: {
      DadosPessoais,
      Header,
      PageTitle,
      ButtonCard,
    },
  }

</script>

<style scoped>

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>