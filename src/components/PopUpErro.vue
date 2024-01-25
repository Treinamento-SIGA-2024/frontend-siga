<template>
  <v-container id="erro" v-if="this.$props.erro">
    <v-card-text id="erroText">Erro: {{this.$props.erro}}</v-card-text>
  </v-container>
</template>

<script>

export default {
  name: "PopUpErro",
  props: {
    erro: Boolean
  }
}

</script>

<style scoped>

#erro {
  min-width: 30vw;

  background-color: #d50f03;
  color: white;

  border-radius: 12px;
}

#erroText {
  font-weight: bold;
  font-size: 16px;
}

</style>