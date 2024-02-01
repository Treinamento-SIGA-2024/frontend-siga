<template>
	<PageTitle title="PORTAL DO PROFESSOR" />
	<DadosPessoais
		:nome="this.usuario.nome"
		:matricula="this.usuario.matricula"
	/>
	<ButtonCard
		title="Iniciação Científica"
		@click="this.$router.push('/professor/ic')"
	/>
	<ButtonCard
		title="Pedidos"
		@click="this.$router.push('/professor/pedidos')"
	/>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import DadosPessoais from "@/components/DadosPessoais.vue";
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
	name: "ProfessorInicial",
	components: {
		DadosPessoais,
		PageTitle,
		ButtonCard,
	},
};
</script>

<style scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
