<template>
  <v-container>
  <v-text-field class="login-input"
      label="Identificação"
      variant="outlined"
      hint="Use seu email ou matrícula para se identificar.">
  </v-text-field>
  <v-text-field
      label="Senha"
      variant="outlined"
      hint="Digite sua senha">
  </v-text-field>
  </v-container>
</template>

<script>

export default {
  name:"loginForm"
}
</script>

<style scoped>
.login-input {
  margin-bottom: 20px;
}

.v-container {
  padding: 40px 20px 0 20px;
}
</style>