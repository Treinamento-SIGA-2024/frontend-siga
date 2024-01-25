<template>
  <v-card flat="true">

    <v-card-text class="custom-text">
      <span>Professor(es):</span>
      <div class="professores">
        <p v-for="prof in this.$props.professores"> 
            {{ prof.nome }}
        </p>
      </div> 
    </v-card-text>

    <v-card-text class="custom-text">
      <span>Tópicos:</span> 
      <div class="topicos">
        <v-chip v-for="top in this.$props.topicos" class="chip" :color="randChipColor()"> 
            {{ top.nome }}
        </v-chip>
      </div>
    </v-card-text>

    <v-card-text class="custom-text">
      <span>Remuneração: </span> 
      R$ {{ this.$props.remuneracao }}
    </v-card-text>

    <v-card-text class="custom-text">
      <span>Carga horária (semanal): </span> 
      {{ this.$props.cargaHorariaSemanal }} horas
    </v-card-text>

    <v-card-text class="custom-text">
      <span>Descrição: </span> 
      <p> {{ this.$props.descricao }}</p>
    </v-card-text>

  </v-card>

</template>

<script>
export default {
  name: 'PageICdescricao',
  props: {
    professores: [],
    topicos: [],
    remuneracao: String,
    cargaHorariaSemanal: String,
    descricao: String, 
  },
  methods:{
    randChipColor() {
      const colors = [
          'primary',
          'secondary',
          'red',
          'green',
      ]

      let randIndex = Math.floor(Math.random() * 3);

      return colors[randIndex];
    }
  }
};
</script>

<style scoped>

  .custom-text {
    padding: 1rem;
    color: #666;
  }
  .chip {
    margin-right: 5px; 
  }

  span {
    font-weight: bold;
  }

</style>
