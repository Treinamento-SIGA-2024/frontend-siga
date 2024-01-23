<template>
  <div class="button-container">
    <v-btn class="estagio">Estágio</v-btn>
    <v-btn class="ic">IC</v-btn>
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
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 0;
}
.v-btn:hover {
  cursor: pointer;
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.32);
}

.estagio {
  background-color: rgba(243, 243, 243, 0.93);
  border-top-left-radius: 23px;
}

.ic {
  background-color: rgba(168, 168, 168, 0.4);
  border-top-right-radius: 23px;
}

.button-container {
  padding: 1rem;
}
</style>
