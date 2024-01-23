<template>
  <div class="button-container">
    <v-btn class="estagio"><span>Estágio</span></v-btn>
    <v-btn class="ic"><span>IC</span></v-btn>
  </div>
</template>

<script>
export default {
  name: 'PedidosBotoes',
};
</script>

<style scoped>
.v-btn {
  align-self: center;
  box-shadow: 0px 0px 0px #00000026;
  border-radius: 0;
}
.v-btn:hover {
  cursor: pointer;
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px #00000052;
}

.estagio {
  background-color: #a8a8a866;
  border-top-left-radius: 23px;
}

.ic {
  background-color: #f3f3f3;
  border-top-right-radius: 23px;
}

.button-container {
  padding-top: 1rem;
}

span {
  font-weight: bold;
}
</style>
