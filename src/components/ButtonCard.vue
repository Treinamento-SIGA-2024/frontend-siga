<template>
    <v-btn @click="" class="HomeCard" style="
      height: 100px;
      " stacked elevation="4">
        {{this.$props.title}}
        <v-card-subtitle v-if="this.$props.data">
          Empresa: {{this.$props.data.estagio.empresa}}
        </v-card-subtitle>
        <v-card-subtitle v-if="this.$props.data">
          Cargo: {{ this.$props.data.estagio.cargo }}
        </v-card-subtitle>
    </v-btn>
</template>

<script>

export default {
  name: 'ButtonCard',
  props: {
    title: String,
    data: Object
  },
}

</script>

<style scoped>


.HomeCard {
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