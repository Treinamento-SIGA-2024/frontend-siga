<template>
  <v-app class="app">
    <v-snackbar v-model="snackbar" 
    :timeout="1000 * 10">
		  <span> {{ snackMsg }}</span>
	  </v-snackbar>
    <Header v-if="!isLoginPage" />
    <ButtonBack v-if="!isLoginPage" />
    <router-view @erro="mostraSnackErro"
      @sucesso="mostraSnackSucesso"/>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import ButtonBack from '@/components/ButtonBack.vue'

export default {
  name: 'App',
  components: {
    Header,
    ButtonBack,
  },
  data() {
    return {
      snackMsg: "",
      snackbar: false,
      snackColor: String
    }
  },
  computed: {
    isLoginPage() {
      return this.$route.name === 'AuthLogin' // Substitua 'Login' com o nome da sua rota de login
    },
  },
  methods: {
    mostraSnackErro(err) {
      if (!err.response || err.response.status === 500) {
					this.snackMsg = "Erro no servidor";
				} else if (err.response.status === 404) {
					this.$router.push("/notfound");
				} else {
					this.snackMsg = err.response.data.message;
				}
        this.snackColor = "red";
				this.snackbar = true;
    },
    mostraSnackSucesso (msg) {
      this.snackMsg = msg;
      this.snackColor = "green";
      this.snackbar = true;
    },
  }
}
</script>

<style>
:root {
  --green0: #c1debe;
  --green1: #86c497;
  --green2: #53b584;
  --green3: #41af75;
  --green4: #19856e;
}

.app {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
