<template>
  <v-container>
      <v-btn>Entrar</v-btn>
  </v-container>
</template>


<script>
export default {
  name: "loginButton"
}
</script>

<style scoped>
.v-container {
  display: flex;
  flex-direction: column;
}

.v-btn {
  background-color: #27AE60;
  color: #FFFFFF;
}

.v-btn:hover {
  background-color: #FFFFFF;
  color: #27AE60;
}
</style>