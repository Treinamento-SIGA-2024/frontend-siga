<template>
    <PageTitle title="PORTAL DO PROFESSOR"/>
    <DadosPessoais/>
    <ButtonCard title="Iniciação Científica"  @click="this.$router.push('/professor/ic')"/>
    <ButtonCard title="Pedidos" @click="this.$router.push('/professor/pedidos')"/>
    <ButtonCard title="Requerimentos (Alunos)" @click="this.$router.push('/professor/ic/pagina/solicitacoes')"/>
  </template>
  
  <script>
 
  import PageTitle from "@/components/PageTitle.vue"
  import ButtonCard from "@/components/ButtonCard.vue"
  import DadosPessoais from "@/components/DadosPessoais.vue";
  
  
  export default {
    name: "ProfessorInicial",
    components: {
      DadosPessoais,
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