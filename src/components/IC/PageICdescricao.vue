<template>
  <v-card flat="true">
    <v-card-text class="custom-text"
      ><span>Nome:</span> Fulano de tal</v-card-text
    >
    <v-card-text class="custom-text"><span>Tópicos:</span> IA</v-card-text>
    <v-card-text class="custom-text"
      ><span>Remuneração:</span> 400R$</v-card-text
    >
    <v-card-text class="custom-text"
      ><span>Carga Horária:</span> 20 horas semanais</v-card-text
    >
    <v-card-text class="custom-text"
      ><span>Descrição:</span> Lorem ipsum dolor sit amet, consecte
      tursssssssssssss</v-card-text
    >
  </v-card>
</template>

<script>
export default {
  name: 'PageICdescricao',
};
</script>

<style scoped>
.custom-text {
  padding: 1rem;
  color: #666;
}

span {
  font-weight: bold;
}
</style>
