<template>
	<PageTitle title="PORTAL DO COORDENADOR" />
	<DadosPessoais
		:nome="this.usuario.nome"
		:matricula="this.usuario.matricula"
	/>
	<ButtonCard
		title="Iniciação Científica"
		@click="redirectTo('/coordenador/ic')"
	/>
	<ButtonCard title="Estágio" @click="redirectTo('/coordenador/estagio')" />
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import DadosPessoais from "@/components/DadosPessoais.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import { getUsuario } from "@/services/sessaoService";

export default defineComponent({
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
	components: { ButtonCard, DadosPessoais, PageTitle, Header },
	methods: {
		redirectTo(path) {
			this.$router.push(path);
		},
	},
});
</script>

<style scoped></style>
