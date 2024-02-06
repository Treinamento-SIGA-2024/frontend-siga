<template>
	<div class="container">
		<PageTitle :title="this.propostaIc.nome" />
		<ChapeuIC />
		<PageICdescricao
			:professores="this.propostaIc.professores"
			:topicos="this.propostaIc.topicos"
			:remuneracao="this.propostaIc.remuneracao"
			:cargaHorariaSemanal="this.propostaIc.cargaHorariaSemanal"
			:descricao="this.propostaIc.descricao"
		/>
		<div class="buttons-container">
			<v-btn
				rounded="xl"
				color="#27AE60"
				v-bind="props"
				@click="this.aprovarIC()"
			>
				Aprovar
			</v-btn>
			<v-btn
				color="#EB5757"
				rounded="xl"
				v-bind="props"
				@click="this.rejeitarIC()"
			>
				Negar
			</v-btn>
		</div>
	</div>
  <v-snackbar
      :timeout="5000"
      :color="cor"
      elevation="24"
      v-model="snackbar"
  >
    <span>{{ snackMessage }}</span>
  </v-snackbar>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import ChapeuIC from "@/icons/IconeIC.vue";
import PageICdescricao from "@/components/IC/PageICdescricao.vue";
import PageICbotao from "@/components/IC/PageICbotao.vue";

import { getIcById } from "@/services/iniciacaoCientifica.js";
import { aprovarIC, rejeitarIC } from "@/services/coordenadorService.js";

import { getUsuario } from "@/services/sessaoService";

export default {
	name: "SubmitICCoordenador",
	components: {
		PageTitle,
		ChapeuIC,
		PageICdescricao,
		PageICbotao,
	},
	methods: {
		async getPropostaIc() {
			const responseData = await getIcById(this.$route.params.icId);
			this.propostaIc = responseData;
		},

		async aprovarIC() {
      try{
        let res = await aprovarIC( this.propostaIc.id);
        console.log(res);
        this.tratarPromessas("success", "Ic aprovada com sucesso!");
        setTimeout( ()=> this.$router.push("/coordenador/ic"), 3000);

      }catch (err){
        this.tratarPromessas("error", err.response.data.message);
        console.log(err.response)
      }

		},

		async rejeitarIC() {
      try {
        let res = await rejeitarIC(this.propostaIc.id);
        console.log(res);
        this.tratarPromessas("success", "Ic recusada com sucesso!")
        setTimeout(()=> this.$router.push("/coordenador/ic"), 3000);
      }catch (err){
        this.tratarPromessas("error", err.response.data.message);
        console.log(err.response);
      }
		},
    tratarPromessas(resposta, mensagem){
      this.snackbar = true;
      this.cor = resposta;
      this.snackMessage = mensagem;
    }
	},
	async created() {
		this.usuario = await getUsuario();
		this.getPropostaIc();
	},
	data() {
		return {
			usuario: {},
			propostaIc: null,
      cor:"",
      snackbar:false,
      snackMessage:""
		};
	},
};
</script>

<style scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 25px;
}

.buttons-container * {
	margin: 10px;
}
</style>
