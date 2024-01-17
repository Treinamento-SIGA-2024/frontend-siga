<template>

  <v-container class="HomeCard">
      <v-card :flat="true" :color="this.global.colors.green0">
        <v-card-title class="d-flex justify-center align-center" height="100%">
          {{this.$props.title}}
        </v-card-title>
      </v-card>
  </v-container>
</template>

<script>


export default {
  name: 'ButtonCard',
  props: {
    title: String,
  },
}

</script>

<style scoped>


.HomeCard {
  height: 130px;
  width: 310px;
  border-radius: 23px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.38);
  background-color: #C1DEBE;
  margin-top: 30px;
}


</style>