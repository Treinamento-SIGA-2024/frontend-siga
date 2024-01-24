<template>
  <v-app class="app">
    <Header/>
    <ButtonBack/>
    <router-view/>
  </v-app>
</template>

<script>

import Header from "@/components/Header.vue"
import ButtonBack from "@/components/ButtonBack.vue";

export default {
  name: 'App',
  components: {
    Header,
    ButtonBack
  },
}

</script>


<style>
:root {
  --green0: #C1DEBE;
  --green1: #86C497;
  --green2: #53B584;
  --green3: #41AF75;
  --green4: #19856E;
}

.app {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
