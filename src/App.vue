<template>
  <v-app class="app">
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
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

/*
@font-face {
  font-family: "Source Sans Pro Bold";
  src: url('~@/assets/fonts/SourceSansPro-Bold.otf');
}

@font-face {
  font-family: "Source Sans Pro";
  src: url('~@/assets/fonts/SourceSansPro-Regular.otf');
}

*{
  font-family: Source Sans Pro;
}
*/


</style>
