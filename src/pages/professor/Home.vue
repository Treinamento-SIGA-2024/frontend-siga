<template>
	<PageTitle title="PORTAL DO PROFESSOR" />
	<DadosPessoais
		:nome="this.usuario.nome"
		:matricula="this.usuario.matricula"
	/>
	<ButtonCard
		title="Minhas Iniciações Científicas"
		@click="this.$router.push('/professor/ic')"
	/>
	<ButtonCard
		title="Minhas propostas de IC"
		@click="this.$router.push('/professor/pedidos')"
	/>
    <ButtonCard 
		title="Requerimentos de Alunos (IC)" 
		@click="this.$router.push('/professor/ic/pagina/solicitacoes')"
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
		try {
			this.usuario = await getUsuario();
		} catch (err) {
			this.$emit("erro", err);
		}
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
