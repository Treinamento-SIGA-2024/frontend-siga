<template>
  <PageTitle title="TÓPICOS - IC"/>
  <div class="d-flex align-center flex-column">
    <v-btn id="novoTopico" @click="this.$router.push('/secretaria/topico/novotopico')">
      <p>NOVO TÓPICO</p>
    </v-btn>
  </div>
</template>

<script>

import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";

export default {
  name: "SecretariaTopicos",
  components: {
    PageTitle,
    ButtonCard,
  }
}
</script>

<style scoped>

#novoTopico {
  background-color: var(--green1);
}

</style>