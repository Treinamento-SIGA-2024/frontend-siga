<template>
    <v-btn 
      @click="this.$router.push({ 
        name: this.$props.redirectTo
      })" 
      class="HomeCard" 
      style="height: 100px">
        {{this.$props.title}}
    </v-btn>
</template>

<script>

export default {
  name: 'ButtonCard',
  props: {
    title: String,
    redirectTo: String,
  },
}

</script>

<style scoped>


.HomeCard {
  height: 500px;
  width: 310px;
  align-self: center;
  border-radius: 23px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  margin-top: 30px;
  background-color:#C1DEBE;
}

.HomeCard:hover{
  cursor: pointer;
  background-color: #86C497;
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.32);
}

</style>