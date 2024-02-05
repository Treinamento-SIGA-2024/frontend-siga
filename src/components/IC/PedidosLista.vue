<template>
  <main>
    <v-container style="width: 100%">
      <v-row>
        <v-col v-for="(inscricao, i) in this.$props.inscricoes" :key="i" cols="auto">
          <PedidosListaCard
            @updatePage="updatePage"
            :inscricao="inscricao"
          />
        </v-col>
        <v-col v-for="(pedido, i) in this.$props.pedidos" :key="i" cols="auto">
          <PedidosListaCard
              @updatePage="updatePage"
              :pedido="pedido"
          />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import PedidosListaCard from "./PedidosListaCard.vue";
import { getAllInscricoes } from "@/services/inscricaoICService.js";
import { getUsuario } from "@/services/sessaoService";

export default {
	name: "PedidosLista",
	components: {
		PedidosListaCard,
	},
	data() {
		return {
			inscricoes: [],
			aluno: {},
		};
	},
	props: {
    inscricoes: Array,
    pedidos: Array,
	},

	async created() {
		this.aluno = await getUsuario();
		this.getInscricoes();
	},
	methods: {
		async getInscricoes() {
			try {
				const inscricoes = await getAllInscricoes(this.aluno.id);
				this.inscricoes = inscricoes;
			} catch (err) {
				this.$emit("erro", err);
			}
			this.$emit("updatePage");
		},
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
