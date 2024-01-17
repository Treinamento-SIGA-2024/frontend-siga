<template>
  <div class="appHeader">
    <v-app-bar :color="this.global.colors.green3" :flat="true" class="teste">
      <div class="style-test">
        <div class="logo-box">
          <img src="@/assets/logo.svg" alt="logo sgo">
        </div>
        <div class="logout-box">
          <Logout/>
        </div>
      </div>

    </v-app-bar>
  </div>


</template>

<script>
import Logout from "@/icons/Logout.vue";

 export default {
  name: "Header",
   components: {Logout},
}

</script>

<style scoped>


.appHeader{
  width: 100vw;
  height: auto;
}

.teste {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.style-test{
  display: flex;
  justify-content: space-between;
}

</style>