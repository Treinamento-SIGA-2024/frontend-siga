<template>

	<!-- Ainda eh necessário componentizar essa página  -->
	<!-- Titulo -->
	<v-container>
		<v-card :flat="true">
			<v-card-title>
				<div class="title">Cadastro</div>
			</v-card-title>
		</v-card>
	</v-container>

	<!-- Form de Cadastro da IC -->
	<v-sheet width="300" class="mx-auto">
		<v-form fast-fail @submit.prevent class="form">
			<v-text-field
				v-model="registrationData.nome"
				label="Título da proposta"
				:rules="titleNameRules"
			></v-text-field>

			<!-- Seletor dos tópicos -->
			<v-select
				chips
				v-model="registrationData.topicos"
				:multiple="true"
				label="Selecione o(s) tópico(s) da proposta"
				:items="topicos"
				return-object
				item-title="nome"
			>
			</v-select>
			<div class="inputWrapper">
				<v-text-field
					v-model="registrationData.remuneracao"
					label="R$"
					:rules="valueNameRules"
					width="30"
				></v-text-field>
				<v-text-field
					v-model="registrationData.cargaHorariaSemanal"
					label="Carga Horária"
					:rules="valueNameRules"
					width="30"
				></v-text-field>
			</div>

			<v-container>
				<v-row>
					<v-col cols="12" sm="6" class="textArea">
						<v-textarea
							label="Descrição da proposta"
							auto-grow
							variant="outlined"
							rows="3"
							row-height="25"
							shaped
							v-model="registrationData.descricao"
						></v-textarea>
					</v-col>
				</v-row>
			</v-container>

			<v-btn type="submit" block class="mt-2 registrationBtn" @click="createIC"
				>Cadastrar Proposta</v-btn
			>
		</v-form>
	</v-sheet>
</template>

<script>
import { getTopicos } from "@/services/topicosService.js";
import { createIniciacaoCientifica } from "@/services/IniciacaoCientificaService.js";

export default {
	name: "CadastroProfessorIC",
	created() {
		this.getTopics();
	},
	data: () => ({
		// validação dos inputs
		titleNameRules: [
			(value) => {
				if (value !== "") return true;
				return "Por favor, preencha o título da proposta.";
			},
		],
		valueNameRules: [
			(value) => {
				if (/[^a-zA-ZäöüßÄÖÜ]/.test(value)) return true;
				return "Valor inválido";
			},
		],
		topicos: [],
		registrationData: {
			nome: "",
			remuneracao: "",
			cargaHorariaSemanal: "",
			descricao: "",
			topicos: [],
			professores: [],
		},
	}),
	methods: {
		async getTopics() {
			try {
				const tops = await getTopicos();
				this.topicos = tops;
			} catch (err) {
				this.$emit("erro", err);
			}
		},
		async createIC() {
			console.log(this.registrationData);
			try {
				await createIniciacaoCientifica(this.registrationData);
				this.$emit("sucesso", "Legal, você criou uma proposta de IC!")
				setTimeout(() => this.$router.push("/professor/pedidos"), 3000);
			} catch (err) {
				this.$emit("erro", err);
			}
		},
	},
};
</script>

<style scoped>
.title {
	color: #282828;
	font-size: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Source Sans Pro;
	color: #666666;
}
.registrationBtn {
	background-color: #cfeedc;
	font-family: Source Sans Pro;
}
.form {
	gap: 15px;
	display: flex;
	flex-direction: column;
}
.inputWrapper {
	display: flex;
	flex-direction: row;
	gap: 15px;
}

.textArea {
	min-width: 300px;
	@media (min-width: 600px) {
		padding: 0px;
	}
}
</style>
