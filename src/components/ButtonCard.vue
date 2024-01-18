<template>
  <v-container class="HomeCard" >
      <v-card flat="true" :color="this.global.colors.green0" class="title">
        <v-card-title>
          <div>
            {{this.$props.title}}
          </div>
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
  margin-top: 30px;
  background-color:#C1DEBE;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>