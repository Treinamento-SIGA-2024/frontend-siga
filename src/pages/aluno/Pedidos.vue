<template>
  <PageICtitulo title="Pedidos"></PageICtitulo>
  <PedidosBotoes></PedidosBotoes>
  <PedidosLista></PedidosLista>
</template>

<script>
import PageICtitulo from '@/components/IC/PageICtitulo.vue';
import PedidosBotoes from '@/components/IC/PedidosBotoes.vue';
import PedidosLista from '@/components/IC/PedidosLista.vue';

export default {
  name: 'PedidosAluno',
  components: {
    PageICtitulo,
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
