<template>
  <main>
    <v-container class="login-img-background">
    </v-container>
    <div class="login-container">
      <loginTitle></loginTitle>
      <login-form></login-form>
      <login-button></login-button>
    </div>
  </main>
</template>


<script>
import LoginTitle from "@/components/loginTitle.vue";
import LoginForm from "@/components/loginForm.vue";
import LoginButton from "@/components/loginButton.vue";

export default {
  name: "AuthLogin",
  components: {LoginButton, LoginForm, LoginTitle}
}

</script>

<style scoped>

@media (min-width: 1024px) {
  main {
    display: flex;
    flex-direction: row;
    margin-left: -80px;
    margin-top: -45px;
    height: 100vh;
  }
  .login-img-background {
    background-image: url("./src/assets/img/loginImage.png");
    background-size: cover;
    height: 115vh;
  }

  .login-container {
    margin-left: 50px;
    margin-right: 50px;
  }
}


</style>