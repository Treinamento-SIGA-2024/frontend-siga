<template>
	<LoginTitle />
	<v-form @submit.prevent="login">
		<v-text-field
			class="login-input"
			label="Identificação"
			variant="outlined"
			hint="Use seu email ou matrícula para se identificar."
			v-model="form.identificador"
			required
		/>
		<v-text-field
			label="Senha"
			variant="outlined"
			type="password"
			hint="Digite sua senha"
			v-model="form.senha"
			required
		/>
		<v-container>
			<v-btn type="submit">Entrar</v-btn>
		</v-container>
	</v-form>
</template>

<script>
import { createSessao } from "@/services/sessaoService";
import LoginTitle from "./LoginTitle.vue";

export default {
	name: "LoginForm",
	components: {
		LoginTitle
	},
	data() {
		return {
			form: {
				identificador: "",
				senha: "",
			},
		};
	},
	props: {
		onLogin: Function,
		default: () => {},
	},
	methods: {
		async login() {
			const sessao = await createSessao(this.form);
			localStorage.setItem("sessao", sessao.id);
			console.log(localStorage.getItem("sessao"));
			this.onLogin();
		},
	},
};
</script>

<style scoped>
.login-input {
	margin-bottom: 20px;
}

.v-form {
	padding: 0 20px 0 20px;
}

.v-container {
	display: flex;
	flex-direction: column;
}

.v-btn {
	background-color: #27ae60;
	color: #ffffff;
}

.v-btn:hover {
	background-color: #ffffff;
	color: #27ae60;
}
</style>
