<template>
  <v-btn class="buttonCard" stacked elevation="4">{{ title }}</v-btn>
</template>

<script>
export default {
  name: 'PageICBotao',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.buttonCard {
  height: 100px;
  width: 310px;
  align-self: center;
  border-radius: 23px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  margin-top: 30px;
  background-color: #c1debe;
}

.buttonCard:hover {
  cursor: pointer;
  background-color: #86c497;
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.32);
}
</style>
