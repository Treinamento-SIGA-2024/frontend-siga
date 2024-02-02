<template>
  <main>
    <v-snackbar :timeout="2500" color="red" elevation="24" v-model="snackbar">
      <span>{{ snackMessage }}</span>
    </v-snackbar>
    <v-container style="width: 100%">
      <v-row>
        <v-col v-for="(inscricao, i) in this.$props.inscricoes" :key="i" cols="auto">
          <PedidosListaCard
            @updatePage="updatePage"
            :inscricao="inscricao"
          >
          </PedidosListaCard>
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
			snackbar: false,
			snackMessage: "",
			inscricoes: [],
			aluno: {},
		};
	},
	props: {
    inscricoes: Array,
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
				console.log(inscricoes);
			} catch (e) {
				console.log(e.response.data.message);
				this.snackMessage = e.response.data.message;
				this.snackbar = !this.snackbar;
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
