<template>
	<div>
		<v-card :flat="true" :font-family="this.global.font">
			<v-container class="PersonalDataContainer">
				<PersonalData />
				<v-card-subtitle class="subtitle">
					Nome: {{ this.$props?.nome }} <br />
					Matrícula: {{ this.$props?.matricula }}
				</v-card-subtitle>
			</v-container>
		</v-card>
	</div>
</template>

<script>
import PersonalData from "@/icons/PersonalData.vue";

export default {
	name: "DadosPessoais",
	components: { PersonalData },
	props: {
		title: String,
		nome: String,
		matricula: String,
	},
};
</script>

<style scoped>
div {
	/*font-family: "this.global.font";*/
	margin-bottom: 10px;
	margin-top: 10px;
}

.PersonalDataContainer {
	display: flex;
	justify-content: center;
	align-items: center;
}

.subtitle {
	font-size: 24px;
}
</style>
