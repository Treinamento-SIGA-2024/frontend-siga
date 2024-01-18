<template>
  <div>
    <v-card :flat="true" :font-family="this.global.font">
      <div class="PersonalDataContainer">
        <PersonalData/>
        <v-card-subtitle class="subtitle">
          Nome: Fulano de Tal{{ this.$props?.name }} <br>
          Matrícula: 123456789{{ this.$props?.matricula }}
        </v-card-subtitle>
      </div>
    </v-card>
  </div>
</template>

<script>
import PersonalData from "@/icons/PersonalData.vue";

export default {
  name: "DadosPessoais",
  components: {PersonalData},
  props: {
    title: String,
    name: String,
    matricula: String,

  },
}
</script>

<style scoped>


div {
  /*font-family: "this.global.font";*/
  margin-bottom: 10px;
  margin-top: 10px;

}

.PersonalDataContainer {
  justify-content: center;
  display: flex;

}

.subtitle {
  font-size: 24px;
}

</style>