<template>
  <v-card
      rounded="xl"
      style="background-color: var(--green3); margin-top: 20px"
      width="40%"
  >
    <v-tabs
        bg-color="#CFEEDC"
        v-model="tab"
        fixed-tabs
        selected-class="ativo"
        slider-color="white"
        whidth="10px"
    >
      <v-tab @click="getIcsAluno"  rounded="ts-xl" value="minhas">Minhas</v-tab>
      <v-tab @click="getIcsDisponiveis" rounded="te-xl" value="disponiveis">Disponiveis</v-tab>
    </v-tabs>

    <v-window v-model="tab">

      <v-window-item value="disponiveis">
        <div class="card-container">
          <v-row value="disponiveis" align="center" justify="center">
            <v-col v-for="(ic, i) in this.ics" :key="i" cols="auto">
              <CardOferta
                  :iniciacao-cientifica="ic"
                  @click="this.$router.push(`/aluno/ic/id/${ic.id}`)"
              />
            </v-col>
          </v-row>
        </div>
      </v-window-item>

      <v-window-item value="minhas">
        <v-card>
          <v-card-title>Grande texto</v-card-title>
        </v-card>
      </v-window-item>

    </v-window>
  </v-card>
</template>

<script>
  import CardOferta from "@/components/CardOferta.vue";

  export default {
    components: {CardOferta},
    data(){
      return{
        tab:"minhas"
      }
    },
    props:{
      ics:{
        required:true
      },
      getIcsDisponiveis:{
        type:Function,
        required: true
      },
      getIcsAluno:{
        type:Function,
        required: true
      }
    },
    created() {
      console.log(this.tab)
    }
  }
</script>


<style scoped>

.ativo{
  background-color: blue;
}

</style>