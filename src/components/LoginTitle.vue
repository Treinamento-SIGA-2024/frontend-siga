<template>
	<v-card :flat="true">
		<v-card-title>
			<div class="title-holder"><span>S</span>ISTEMA DE</div>
			<div class="title-holder"><span>G</span>ERENCIAMENTO DE</div>
			<div class="title-holder"><span>O</span>FERTA</div>
		</v-card-title>
	</v-card>
</template>

<script>
export default {
	name: "LoginTitle",
};
</script>

<style scoped>
span {
	color: #89c79e;
	font-size: 28px;
	font-weight: 700;
}

.title-holder {
	color: #666666;
	font-size: 18px;
	font-weight: 600;
}

.v-card {
	margin: 2rem 0 0 1.3rem;
}

.v-card-title {
	display: flex;
	flex-direction: column;
	margin-top: 20px;
}

@media (min-width: 1024px) {
	.v-card-title {
		flex-direction: row;
		justify-content: center;
		margin-top: 100px;
		margin-bottom: 80px;
		margin-right: 30px;
	}
	.title-holder {
		margin-left: 10px;
	}
}
</style>
