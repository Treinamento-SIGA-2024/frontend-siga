<template>
  <Header />
  <PageTitle title="INICIAÇÃO CIENTÍFICA"/>

  <div class="card-container">
    <v-card 
      v-for="ic in this.ics" 
      @click="this.$router.push({ 
        name: 'PageICAluno',
        params: { icId: ic.id },
      })" 
      class="ic-card">
        <v-card-title> {{ ic.nome }} </v-card-title>
        <v-card-subtitle style="overflow: hidden;"> {{ ic.descricao }} </v-card-subtitle>
        <v-card-text class="ic-card-text">
          <div> Professores: {{ ic.professores.length }} </div> 
          <div> Alunos: {{ ic.inscricoes.length }} </div>
        </v-card-text>  
    </v-card>
  </div>

</template>

<script>
import Header from "@/components/Header.vue"
import PageTitle from "@/components/PageTitle.vue"
import { getAllIcs } from "@/services/iniciacaoCientifica.js"

export default {
  name: "ListIC",
  components: {
    Header,
    PageTitle,
  },
  methods: {
    async getIcs() { this.ics = await getAllIcs(); },
  },
  created() {
    this.getIcs();
  },
  data() {
    return {
      ics: [],
    }
  },
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
.ic-card {
  width: 340px;
  margin-top: 25px;
  border-radius: 20px;
  background-color: #CFEEDC;
}

.ic-card-text {
  display: flex;
  justify-content: space-between;
}

</style>