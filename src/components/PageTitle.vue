<template>
  <div class="title-container">
    <v-card :flat="true">
      <v-card-title class="text-wrap">
        <div class="title">
          {{ this.$props.title }}
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
  },
};
</script>

<style scoped>

.title-container {
  margin-top: 25px;
}
.title {
  color: hsl(0, 0%, 16%);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
