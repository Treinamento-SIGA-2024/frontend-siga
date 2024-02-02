<template>
	<v-container>
		<v-app-bar :color="this.global.colors.green3" :flat="true">
			<div class="logo">
				<img
					id="imglogo"
					src="@/assets/logo.svg"
					alt="logo sgo"
					@click="this.$router.push('/')"
				/>
				<Logout @click="logout" />
			</div>
		</v-app-bar>
	</v-container>
</template>

<script>
import Logout from "@/icons/Logout.vue";

export default {
	name: "Header",
	components: { Logout },
	methods: {
		logout() {
			localStorage.setItem("sessao", null);
			this.$router.push("/");
		},
	},
};
</script>

<style scoped>
.logo {
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 0 20px;
}

#imglogo:hover {
	cursor: pointer;
}

v-container {
	position: fixed;
	top: 0;
	left: 0;
}
</style>
