<template>
	<v-container>
		<v-card :flat="true">
			<v-card-title>
				<div class="title">Pedidos</div>
			</v-card-title>
		</v-card>
	</v-container>

	<div class="d-flex align-center flex-column">
		<v-btn
			max-width="200"
			color="#C1DEBE"
			class="registerBtn"
			@click="goToCadastroIC"
		>
			Cadastrar IC
		</v-btn>
	</div>

	<div
		class="d-flex align-center flex-column"
		v-for="(pedido, i) in pedidos"
		:key="i"
	>
		<v-btn width="310" height="80" color="#CFEEDC" style="margin-bottom: 29px">
			<div class="pedidosBtn">
				<span> {{ pedido.nome }} </span>
			</div>
			<div class="status">
				<svg-icon
					v-if="pedido.situacaoCriacao.descricao == 'Pendente'"
					color="yellow"
					type="mdi"
					:path="path"
				/>
				<svg-icon
					v-if="pedido.situacaoCriacao.descricao == 'Ativo'"
					color="green"
					type="mdi"
					:path="path"
				/>
				<svg-icon
					v-if="pedido.situacaoCriacao.descricao == 'Recusado'"
					color="red"
					type="mdi"
					:path="path"
				/>
			</div>
		</v-btn>
	</div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCircle } from "@mdi/js";
import { getPedidos } from "@/services/professorService.js";
import { getUsuario } from "@/services/sessaoService";

export default {
	name: "my-cool-component",
	components: {
		SvgIcon,
	},
	data() {
		return {
			usuario: {
				id: "",
			},
			pedidos: [],
			path: mdiCircle,
		};
	},
	async created() {
		this.usuario = await getUsuario();
		this.getPedidos();
	},
	methods: {
		async getPedidos() {
			const ped = await getPedidos(this.usuario.matricula);
			this.pedidos = ped;
		},
		goToCadastroIC() {
			this.$router.push("/professor/cadastroIC");
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

.registerBtn {
	margin-bottom: 5vh;
	font-family: Source Sans Pro;
	color: #666666;
}

.pedidosBtn {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 260px;
	height: 75px;
	padding-left: 5px;
	font-family: Source Sans Pro;
}
.status {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 20px;
	height: 75px;
}
</style>
