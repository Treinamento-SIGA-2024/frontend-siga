<template>
    <v-btn :flat="true" @click="" class="HomeCard" style="min-height: 80px">
      <span style="white-space: normal;">
        {{this.$props.title}}
      </span>
    </v-btn>
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
  //display: ;
  width: 280px;
  align-self: center;
  font-size: 16px;
  border-radius: 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  background-color:#86C497;
}

.HomeCard:hover{
  cursor: pointer;
  background-color: #53B584;
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.22);
}

</style>