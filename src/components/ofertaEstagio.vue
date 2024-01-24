<template>
  <ButtonCard :title="estagio.cargo" :subtitle="estagio.empresa"/>

</template>

<script>
import ButtonCard from "@/components/ButtonCard.vue";

export default {
  name: 'ofertaEstagio',
  props: {
    estagio: {
      type: Object,
      required: true,
    }
  },
  components: {
    ButtonCard
  }
}
</script>

<style scoped>

</style>