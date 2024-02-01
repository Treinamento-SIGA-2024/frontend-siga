<template>
	<div style="height: 100vh">
		<Loading v-if="estagio === null" />
		<div v-if="estagio !== null">
			<v-card :flat="true">
				<v-card-title
					style="
						text-align: center;
						color: #666666;
						font-weight: bold;
						margin: 27px;
					"
				>
					Formulário de estágio
				</v-card-title>
			</v-card>
			<v-container class="formEstagio">
				<v-card-text style="font-size: 17px; text-align: justify; margin: 10px">
					Eu, {{ aluno.nome }}, matrícula {{ aluno.matricula }}, venho por meio
					desta solicitar à coordenação a aprovação do meu pedido de estágio na
					empresa {{ estagio?.empresa }}, desempenhando a função de
					{{ estagio?.cargo }}, no modelo {{ estagio?.modalidade }}, com uma
					carga horária de {{ estagio?.cargaHorariaSemanal }} horas semanais.
					<br /><br />
					Espero que minha solicitação seja avaliada favoravelmente,
					considerando a relevâcia dessa experiêcia para o meu desenvolvimento
					acadêmico e profissional
					<br /><br />
					Agradeço antecipadamente pela atenção dispensada.
				</v-card-text>
			</v-container>

			<v-card :flat="true">
				<v-card-actions class="buttons">
					<v-btn class="enviarForm" @click="togglePopUpAction = true">
						Enviar
					</v-btn>
				</v-card-actions>
			</v-card>
		</div>

		<v-container class="overflow" v-if="togglePopUpAction">
			<PopUp
				:acoes="{
					msg: 'Tem certeza?',
					aceitarAction: postPedidoEstagio,
					cancelarAction: () => (togglePopUpAction = false),
				}"
			/>
		</v-container>
	</div>

	<v-snackbar v-model="snackbar" :timeout="1000 * 1000">
		<span> {{ error }}</span>
	</v-snackbar>
</template>

<script>
import { defineComponent } from "vue";
import ButtonCard from "@/components/ButtonCard.vue";
import PopUp from "@/components/PopUp.vue";
import { getEstagioById } from "@/services/Estagio.js";
import { createAlunoPedidoEstagio } from "@/services/inscricaoEstagioService.js";
import Loading from "@/components/Loading.vue";
import { getUsuario } from "@/services/sessaoService";

export default defineComponent({
	components: { Loading, ButtonCard, PopUp },

	data() {
		return {
			aluno: {
				nome: "",
				matricula: "",
			},
			togglePopUpAction: false,
			aluno: {
				nome: "aluno1",
				matricula: "100000001",
			},
			estagio: null,
			estagioId: Number,
			error: String,
			snackbar: false,
		};
	},
	methods: {
		async getEstagio(id) {
			try {
				const response = await getEstagioById(id);
				this.estagio = response;
			} catch (err) {
				if (!err.response || err.response.status === 500) {
					this.error = "Erro no servidor";
				} else if (err.response.status === 404) {
					this.$router.push("/notfound");
				} else {
					this.error = err.response.data.message;
				}
				this.snackbar = true;
			}
		},
		async postPedidoEstagio() {
			try {
				const body = {
					matricula: this.aluno.matricula,
					estagioId: this.estagio.id,
				};
				const response = await createAlunoPedidoEstagio(body);
				this.$router.push("/aluno");
			} catch (err) {
				if (!err.response || err.response.data.status === 500) {
					this.error = "Erro do servidor.";
				} else {
					this.error =
						"Não foi possível enviar o formulário.\n" +
						`Erro: ${err.response.data.message}`;
				}
				this.snackbar = !this.snackbar;
			}
		},
	},
	async created() {
		this.aluno = await getUsuario();
		this.estagioId = this.$route.params.id;
		this.getEstagio(this.estagioId);
	},
});
</script>

<style scoped>
.formEstagio {
	display: flex;
	background: #d9d9d9;
	border-radius: 26px;
	width: 90%;
}

.enviarForm {
	background-color: #89c79e;
	font-weight: bold;
	color: #f2f2f2;
	width: 50%;
}

.buttons {
	display: flex;
	justify-content: center;
	margin: 15px 0;
}
.overflow {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
