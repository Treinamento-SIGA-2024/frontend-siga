<template>
  <main>
    <v-container style="width: 100%">
      <v-row>
        <v-col v-for="(inscricao, i) in this.$props.inscricoes" :key="i" cols="auto">
          <PedidosListaCard
            @updatePage="this.$emit('updatePage')"
            :inscricao="inscricao"
          />
        </v-col>
        <v-col v-for="(pedido, i) in this.$props.pedidos" :key="i" cols="auto">
          <PedidosListaCard
              @updatePage="this.$emit('updatePage')"
              :pedido="pedido"
          />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import PedidosListaCard from "./PedidosListaCard.vue";

export default {
	name: "PedidosLista",
	components: {
		PedidosListaCard,
	},
	props: {
    	inscricoes: Array,
    	pedidos: Array,
	},
};
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
	border-radius: 0px 15px 15px 15px;
}

@media (min-width: 1024px) {
	.v-container {
		width: 100vw;
	}
}
</style>
