<template>
  <main>
    <v-container style="width: 100%">
      <v-row>
        <v-col v-for="(inscricaoEstagio, i) in this.$props.inscricoesEstagio" :key="i" cols="auto">
          <pedidos-estagio-lista-card
            :inscricao-estagio="inscricaoEstagio"
          />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>

import {defineComponent} from "vue";
import PedidosEstagioListaCard from "@/components/PedidosEstagioListaCard.vue";

export default defineComponent({
  components: {PedidosEstagioListaCard
  },
  data(){
    return {
      inscricoesEstagio: [],
    }
  },
  props: {
    inscricoesEstagio: Array
  }
})
</script>

<style scoped>

main {
  width: 100%;
}

.v-col-auto {
  width: 100%;
}

.v-container {
  background-color: #f3f3f3;
  border-radius: 0 15px 15px 15px;
}

@media (min-width: 1024px) {
  .v-container {
    width: 100vw;
  }
}
</style>