<template>
  <PageTitle title="PORTAL DO ALUNO" />
  <DadosPessoais />
  <ButtonCard
    title="Iniciação Científica"
    @click="this.$router.push('/aluno/ic')"
  />
  <ButtonCard 
    title="Estágio" 
    @click="this.$router.push('/aluno/estagio')" 
  />
  <ButtonCard 
    title="Pedidos" 
    @click="this.$router.push('/aluno/pedidos')" 
  />
</template>

<script>
import Header from '@/components/Header.vue';
import PageTitle from '@/components/PageTitle.vue';
import ButtonCard from '@/components/ButtonCard.vue';
import DadosPessoais from '@/components/DadosPessoais.vue';

export default {
  name: 'AlunoInicial',
  components: {
    DadosPessoais,
    Header,
    PageTitle,
    ButtonCard,
  },
};
</script>

<style scoped>
</style>
