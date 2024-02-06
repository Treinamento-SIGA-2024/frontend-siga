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
        <v-tab rounded="ts-xl" value="disponiveis">Disponiveis</v-tab>
        <v-tab rounded="te-xl" value="minhas">Minhas</v-tab>
      </v-tabs>

      <v-window v-model="tab">

        <v-window-item value="disponiveis">
          <Loading v-if="loadingTab"/>
          <div v-if="!loadingTab" class="card-container">
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
          <Loading v-if="loadingTab"/>
          <div v-if="!loadingTab" class="card-container">
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
  <button :disabled="true" class="buttonTeste" @click="alert('clicado')">aaaaaa</button>
</template>

<script>
  import CardOferta from "@/components/CardOferta.vue";
  import Loading from "@/components/Loading.vue";
  import {watch} from "vue";
  export default {
    components: {CardOferta, Loading},
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
      },
      loadingTab:{
        type: Boolean,
        required: true
      }
    },
    created() {
      console.log(this.tab)
      watch(() => this.tab, () => {if (this.tab === 'disponiveis') this.getIcsDisponiveis()});
      watch(() => this.tab, () => {if (this.tab === 'minhas') this.getIcsAluno()});
    }
  }
</script>


<style scoped>
button{
  :disabled{
    background-color: yellow;
  }
}
.buttonTeste{
  background-color: green;
  :disabled{
    background-color: blue;
  }
}
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