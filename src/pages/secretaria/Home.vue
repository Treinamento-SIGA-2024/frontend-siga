<template>
	<PageTitle title="PORTAL DA SECRETARIA" />
	<DadosPessoais
		:nome="this.usuario.nome"
		:matricula="this.usuario.matricula"
	/>
	<ButtonCard
		@click="this.$router.push('/secretaria/estagio')"
		title="Ofertar estágio"
	/>
</template>

<script>
import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import DadosPessoais from "@/components/DadosPessoais.vue";
import ButtonCard from "@/components/ButtonCard.vue";

import { getUsuario } from "@/services/sessaoService";

export default {
	data() {
		return {
			usuario: {
				nome: "",
				matricula: "",
			},
		};
	},
	async created() {
		this.usuario = await getUsuario();
	},
	name: "SecretariaInicial",
	components: {
		title: String,
		Header,
		PageTitle,
		DadosPessoais,
		ButtonCard,
	},
};
</script>

<style scoped></style>
