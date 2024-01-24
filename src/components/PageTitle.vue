<template>
  <div>
    <v-card :flat="true">
      <v-card-title>
        <div class="title">
          PORTAL DO {{ this.$props.title }}
        </div>
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


<style scoped>

.title {
  color: #282828;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>