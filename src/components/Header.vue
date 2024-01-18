<template>
  <v-container>
    <v-app-bar :color="this.global.colors.green3" flat="true">
      <div class="logo">
          <img src="@/assets/logo.svg" alt="logo sgo">
          <Logout />
      </div>
    </v-app-bar>
  </v-container>
</template>

<script>
import Logout from "@/icons/Logout.vue";

export default {
  name: "Header",
  components: { Logout },
}

</script>

<style scoped>

.logo {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 20px;
}

v-container {
  position: fixed;
  top: 0;
  left: 0;
}


</style>