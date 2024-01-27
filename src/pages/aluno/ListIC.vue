<template>
  <div class="container ">
    <PageTitle title="INICIAÇÃO CIENTÍFICA"/>
    
    <v-btn v-if="!filtros" id="addFiltro" @click="filtros = true">
      <PlusIcon />
      <p>Adicionar filtros</p>
    </v-btn>
    
    <v-container v-if="filtros" class="filter-container">
      
      <v-btn variant="flat" @Click="filtros = false" id="closeFiltros" @click="filterCards">
        <CloseIcon />
      </v-btn>

      <v-autocomplete 
        clearable
        chips
        label="Selecione os tópicos"
        :items="this.topicos"
        multiple
        variant="outlined"
        v-model="topicosSelecionados"
      ></v-autocomplete>

      <v-autocomplete
        clearable
        chips
        label="Selecione os professores"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        multiple
        variant="outlined"
      ></v-autocomplete>
      
    </v-container>
    
    <div class="card-container">
      <v-card 
        v-for="ic in this.icsFiltradas"
        @click="this.$router.push({ 
          name: 'PageICAluno',
          params: { icId: ic.id },
        })" 
        class="ic-card"
      >
        <v-card-title> {{ ic.nome }} </v-card-title>
        <v-card-subtitle style="overflow: hidden;"> {{ ic.descricao }} </v-card-subtitle>
        <v-card-text class="ic-card-text">
          <div> Professores: {{ ic.professores.length }} </div> 
          <div> Alunos: {{ ic.inscricoes.length }} </div>
      </v-card-text>  
      </v-card>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header.vue"
import PageTitle from "@/components/PageTitle.vue"
import PlusIcon from "@/icons/PlusIcon.vue"
import CloseIcon from "@/icons/CloseIcon.vue"
import { getAllICsDisponiveis } from "@/services/iniciacaoCientifica.js"
import { getTopicos } from "@/services/topicosService.js"

import { watch } from 'vue'

export default {
  name: "ListIC",
  components: {
    Header,
    PageTitle,
    PlusIcon,
    CloseIcon,
  },
  methods: {
    async getIcs() { this.ics = this.icsFiltradas = await getAllICsDisponiveis(); },
    async getTopicos() {
      let tmp = await getTopicos();
      tmp = tmp.map((topico) => topico.nome);
      this.topicos = tmp;
    },
    filterCards () {
      if (this.topicosSelecionados.length === 0) {
        this.icsFiltradas = this.ics
        return;
      }
      this.icsFiltradas = [];
      for (let ic of this.ics) {
        for (let topico of ic.topicos) {
          if (this.topicosSelecionados.includes(topico.nome)) {
            this.icsFiltradas.push(ic);
          }
        }
      }
    }
  },
  created() {
    this.getIcs();
    this.getTopicos();

    this.icsFiltradas = this.ics;

    watch(() => this.topicosSelecionados, this.filterCards);
  },
  data() {
    return {
      ics: [],
      icsFiltradas: [],
      topicos: [],
      topicosSelecionados: [],
      professores: [],
      filtros: false,
    }
  },
}


</script>

<style scoped>

#addFiltro {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  align-self: center; 

  color: white;
  font-weight: bold;
  background-color: var(--green3);
  border-radius: 10px;
}

#closeFiltros {
  align-self: flex-end;
}

.filter-container {
  display: flex;
  flex-direction: column;
}

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

.container {
  display: flex;
  flex-direction: column;
}

</style>