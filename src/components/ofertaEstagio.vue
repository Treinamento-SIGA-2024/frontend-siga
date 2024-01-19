<template>
  <v-card>
    <v-card-title>{{estagio.cargo}}</v-card-title>
    <v-card-subtitle>{{estagio.empresa}}</v-card-subtitle>
  </v-card>
</template>

<script>
  export default {
    name: 'ofertaEstagio',
    props: {
      estagio: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>