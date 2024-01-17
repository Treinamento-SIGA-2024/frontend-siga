<template>
  <div>
    <v-card  class="title" v-slot:title>
      <v-card-title >
        PORTAL DO {{ this.$props.title }}
      </v-card-title>
    </v-card>
  </div>
</template>

<script >


export  default {
  name: "PageTitle",
  props: {
    title: String,
  },
}

</script>


<style>

.title {
  color: #282828;
  text-align: center;
  font-size: 25px;
}

div {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>