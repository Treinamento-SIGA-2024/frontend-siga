<template>
	<LoginForm v-if="this.usuario === null" :onLogin="updateUsuario" />
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
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";

import { getUsuario } from "@/services/sessaoService";
import LoginForm from "@/components/LoginForm.vue";

export default {
	name: "Login",
	components: {
		PageTitle,
		ButtonCard,
		LoginForm,
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
@media (min-width: 1024px) {
	main {
		display: flex;
		flex-direction: row;
		margin-left: -80px;
		margin-top: -45px;
		height: 100vh;
	}
	.login-img-background {
		background-image: url("./src/assets/img/loginImage.png");
		background-size: cover;
		height: 115vh;
	}

	.login-container {
		margin-left: 50px;
		margin-right: 50px;
	}
}
.options {
	display: flex;
	flex-direction: column;
}
</style>
