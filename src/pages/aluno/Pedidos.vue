<template>
  <PageTitle title="Pedidos"></PageTitle>
  <PedidosBotoes></PedidosBotoes>
  <PedidosLista></PedidosLista>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
import PedidosBotoes from '@/components/IC/PedidosBotoes.vue';
import PedidosLista from '@/components/IC/PedidosLista.vue';

export default {
  name: 'PedidosAluno',
  components: {
    PageTitle,
    PedidosBotoes,
    PedidosLista,
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>
