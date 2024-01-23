<template>
  <v-container class="popUpExterno">
    <v-container class="popUpInterno">
    <v-card-title>Tem certeza?</v-card-title>
    <v-card :flat="true">
      <v-card-actions class="buttons">
        <v-btn class="aceitarForm">
          Sim
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card :flat="true">
      <v-card-actions class="buttons">
        <v-btn class="recusarForm">
          Não
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.popUpExterno{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0,0,0,0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  .popUpInterno{
    background: #FFF;
    padding: 32px;
  }
}
</style>