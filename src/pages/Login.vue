<template>
	<main>
		<v-container class="login-img-background" />
		<v-container v-if="this.usuario === null" class="login-container">
			<LoginForm :onLogin="updateUsuario" />
		</v-container>
		<v-container v-else-if="this.usuario.cargos.length > 1">
			<PageTitle title="BEM-VINDO(A)" />
			<v-container class="options" >
			<ButtonCard
				:title="cargo.nome"
				@click="this.$router.push(`/${cargo.nome.toLowerCase()}`)"
				v-for="(cargo) in this.usuario.cargos"
			/>
		</v-container>
		</v-container>
	</main>
	
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import LoginTitle from "@/components/LoginTitle.vue"

import { getUsuario } from "@/services/sessaoService";
import LoginForm from "@/components/LoginForm.vue";

export default {
	name: "Login",
	components: {
		PageTitle,
		ButtonCard,
		LoginForm,
		LoginTitle
	},
	data() {
		return {
			usuario: null,
		};
	},
	async created() {
		await this.updateUsuario();
	},
	methods: {
		async updateUsuario() {
			this.usuario = await getUsuario();
			if (this.usuario !== null && this.usuario.cargos.length === 1) {
				this.$router.push(`/${this.usuario.cargos[0].nome}`);
			}
		},
	},
};
</script>
<style scoped>
.login-img-background {
	display: none;
}
.options {
	display: flex;
	flex-direction: column;
}
@media (min-width: 1024px) {
	main {
		display: flex;
		flex-direction: row;
		margin-left: -80px;
		margin-top: -32px;
		height: 100vh;
	}
	.login-img-background {
		display: inline;
		background-image: url("./src/assets/img/loginImage.png");
		background-size: cover;
	}
}

</style>
