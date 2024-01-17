<template>
  <v-container>
    <v-card  flat="true">
      <v-card-title >
        <div class="title">
          PORTAL DO {{ this.$props.title }}
        </div>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script >


export  default {
  name: "PageTitle",
  props: {
    title: String,
  },
}

</script>


<style scoped>

.title {
  color: #282828;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

v-card-title {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>