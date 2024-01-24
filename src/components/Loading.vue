<template>
  <v-container class="loadingContainer">
    <v-progress-circular
        :color="this.global.colors.green0"
        size="x-large"
        indeterminate
    ></v-progress-circular>
  </v-container>
</template>

<script>

export default {
  name: "Loading",
}

</script>

<style scoped>

.loadingContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>