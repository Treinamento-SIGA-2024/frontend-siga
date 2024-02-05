<template>
  <v-container style="display: flex; justify-content: center">
    <v-card
        rounded="xl"
        style="display: flex;background-color: #f3f3f3; margin-top: 20px;flex-direction: column"
        width="100vw"
    >
      <v-tabs
          bg-color="#ffffff"
          v-model="tab"
          fixed-tabs
          align-tabs="start"
          selected-class="ativo"
          slider-color="white"
          whidth="10px"
      >
        <v-tab @click="getIcsDisponiveis" rounded="ts-xl" value="disponiveis">Disponiveis</v-tab>
        <v-tab @click="getIcsAluno"  rounded="te-xl" value="minhas">Minhas</v-tab>
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

      </v-window>
    </v-card>
  </v-container>
</template>

<script>
  import CardOferta from "@/components/CardOferta.vue";

  export default {
    components: {CardOferta},
    data(){
      return{
        tab:"disponiveis"
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

.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
}


.ativo{
  background-color: #F3F3F3;
}

</style>