<template>
  <div id="placeholder-btn">
    <v-btn id="voltar" @click="this.$router.back()" v-if="!isRouteHome">
      <GoBackIcon id="iconBack" />
      <p id="textoBack">Voltar</p>
    </v-btn>
  </div>
</template>

<script>
import ButtonCard from '@/components/ButtonCard.vue'
import GoBackIcon from '@/icons/GoBackIcon.vue'

export default {
  name: 'ButtonBack',
  components: {
    GoBackIcon,
    ButtonCard,
  },
  computed: {
    isRouteHome() {
      return this.$route.path === '/'
    },
  },
}
</script>

<style scoped>
@media (max-width: 800px) {
  #voltar {
    width: 50px;
  }
  #textoBack {
    display: none;
  }
}
@media (min-width: 801px) {
  #iconBack {
    display: none;
  }
}
#placeholder-btn {
  width: 100%;
  height: 40px;
}
#voltar {
  width: fit-content;
  font-size: 15px;
  background-color: white;
  color: var(--green4);
  align-self: center;
  border-radius: 15px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
  margin: 10px 0 0 10px;
  position: absolute;
  z-index: 2;
}

#voltar:hover {
  cursor: pointer;
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.22);
}
</style>
