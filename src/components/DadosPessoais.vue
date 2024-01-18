<template>
  <div>
    <v-card :font-family="this.global.font">
      <v-card-title class="title">
        DADOS PESSOAIS
      </v-card-title>
      <v-card-subtitle class="subtitle">
        Nome: Fulano de Tal{{ this.$props?.name }} <br>
        Matrícula: 123456789{{ this.$props?.matricula }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export  default {
  name: "DadosPessoais",
  props: {
    title: String,
    name: String,
    matricula: String,

  },
}
</script>

<style scoped>
div {
  /*font-family: "this.global.font";*/
}

.title {
  font-weight: bold;
}

.subtitle {
  font-size: 20px;
}

</style>