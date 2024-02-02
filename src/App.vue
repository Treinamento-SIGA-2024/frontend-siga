<template>
  <v-app class="app">
    <Header v-if="!isLoginPage" />
    <ButtonBack v-if="!isLoginPage" />
    <router-view />
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
  computed: {
    isLoginPage() {
      return this.$route.name === 'AuthLogin' // Substitua 'Login' com o nome da sua rota de login
    },
  },
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
