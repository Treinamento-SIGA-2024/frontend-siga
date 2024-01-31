<template>
  <v-btn @click="" class="HomeCard" style="height: 100px" stacked elevation="4">
    {{ this.$props.title }}
    <span v-if="this.$props.subtitle" style="white-space: normal">{{
      this.$props.subtitle
    }}</span>
    <v-card-subtitle v-if="this.$props.data">
      Empresa: {{ this.$props.data.estagio.empresa }}
    </v-card-subtitle>
    <v-card-subtitle v-if="this.$props.data">
      Cargo: {{ this.$props.data.estagio.cargo }}
    </v-card-subtitle>
    <v-btn onclick="" class="botaoRemover" v-if="this.$props.textoBotao">{{
      this.$props.textoBotao
    }}</v-btn>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonCard',
  props: {
    title: String,
    data: Object,
    subtitle: String,
    textoBotao: String,
  },
};
</script>

<style scoped>
.HomeCard {
  width: 310px;
  align-self: center;
  font-size: 16px;
  border-radius: 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  background-color: var(--green1);
}

.HomeCard:hover {
  cursor: pointer;
  background-color: var(--green2);
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.22);
}

.botaoRemover {
  background: #eb5757;
  color: #f2f2f2;
  margin-top: 1rem;
  border-radius: 10px;
}

.botaoRemover:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition-duration: 500ms;
  color: #eb5757;
  background: #f2f2f2;
}
</style>
