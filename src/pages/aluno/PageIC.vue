<template>
  <div class="container">
    <PageICtitulo title="Nome da ic"></PageICtitulo>
    <ChapeuIC></ChapeuIC>
    <PageICdescricao></PageICdescricao>
    <PageICbotao title="Solicitar IC"></PageICbotao>
  </div>
</template>

<script>
import PageICtitulo from '@/components/IC/PageICtitulo.vue';
import ChapeuIC from '@/icons/IconeIC.vue';
import PageICdescricao from '@/components/IC/PageICdescricao.vue';
import ButtonCard from '@/components/ButtonCard.vue';
import PageICbotao from '@/components/IC/PageICbotao.vue';

export default {
  components: {
    PageICtitulo,
    ChapeuIC,
    PageICdescricao,
    ButtonCard,
    PageICbotao,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  place-items: center;
  flex-direction: column;
}
</style>
