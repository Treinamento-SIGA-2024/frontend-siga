<template>
	<PageTitle title="PORTAL DO ALUNO" />
	<DadosPessoais
		:nome="this.usuario.nome"
		:matricula="this.usuario.matricula"
	/>
	<ButtonCard
		title="Iniciação Científica"
		@click="this.$router.push('/aluno/ic')"
	/>
	<ButtonCard title="Estágio" @click="this.$router.push('/aluno/estagio')" />
	<ButtonCard title="Pedidos" @click="this.$router.push('/aluno/pedidos')" />
</template>

<script>
import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import DadosPessoais from "@/components/DadosPessoais.vue";

import { getUsuario } from "@/services/sessaoService";

export default {
	name: "AlunoInicial",
	components: {
		DadosPessoais,
		Header,
		PageTitle,
		ButtonCard,
	},
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
};
</script>

<style scoped></style>
