<template>
  <PageTitle title="Pedidos"></PageTitle>
  <PedidosBotoes></PedidosBotoes>
  <Loading v-if="loading"></Loading>
  <PedidosLista v-show="!loading" @updatePage="stopLoading"></PedidosLista>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import PedidosBotoes from '@/components/IC/PedidosBotoes.vue'
import PedidosLista from '@/components/IC/PedidosLista.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'PedidosAluno',
  components: {
    PageTitle,
    PedidosBotoes,
    PedidosLista,
    Loading,
  },

  data() {
    return {
      loading: true,
    }
  },
  methods: {
    stopLoading() {
      this.loading = !this.loading
    },
  },
}
</script>

<style scoped>
@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>
