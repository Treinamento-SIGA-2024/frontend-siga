<template>
  <PageTitle title="Minhas Propostas de IC" />

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


  <v-container v-for="(value, key) in pedidosCategorizados">
    <div class="aba" @click="abas[key] = !abas[key]"
         :style="{borderRadius: abas[key] ? '15px 15px 0 0' : '15px'}">
      <v-card-title>{{key}} ( {{value.length}} )</v-card-title>
      <ArrowDown v-if="!abas[key]"/>
      <ArrowUp v-if="abas[key]"/>
    </div>
    <PedidosLista v-if="abas[key]" :pedidos="value"/>
  </v-container>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCircle } from '@mdi/js'
import { getPedidos } from '@/services/professorService.js'
import PageTitle from '@/components/PageTitle.vue'
import { getUsuario } from "@/services/sessaoService";
import PedidosLista from "@/components/IC/PedidosLista.vue";
import ArrowDown from "@/icons/ArrowDown.vue";
import ArrowUp from "@/icons/ArrowUp.vue";

export default {
	name: "my-cool-component",
	components: {
    PedidosLista,
    ArrowUp, ArrowDown,
		SvgIcon,
		PageTitle,
	},
	data() {
		return {
			usuario: {
				id: "",
			},
			pedidos: [],
      pedidosCategorizados: {
        Pendentes: [],
        Recusadas: [],
      },
      abas: {},
      situacoes: [],
			path: mdiCircle,
		};
	},
	async created() {
		this.usuario = await getUsuario();
		await this.getPedidos();
    for (let pedido of this.pedidos) {
      console.log(pedido)
      if(pedido.situacaoCriacao.descricao === "Pendente") {
        this.pedidosCategorizados["Pendentes"].push(pedido);
      }
      else if (pedido.situacaoCriacao.descricao === "Recusada") {
        this.pedidosCategorizados["Recusadas"].push(pedido);
      }
    }
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

.aba {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 0 5px;
  width: 200px;
  border-radius: 15px 15px 0 0;
  background-color: #f3f3f3;
}

.aba:hover {
  cursor: pointer;
}

</style>
