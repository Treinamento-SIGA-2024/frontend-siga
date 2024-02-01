<template>
  <div class="container ">
    <PageTitle title="INICIAÇÃO CIENTÍFICA"/>
    
    <v-btn v-if="!filtros" id="addFiltro" @click="filtros = true">
      <PlusIcon />
      <p>Adicionar filtros</p>
    </v-btn>
    
    <Loading v-if="ics.length === 0"/>

    <v-container v-if="filtros" class="filter-container">
      
      <CloseIcon @Click="fechaFiltros" id="closeFiltros" alt="Cancelar filtros"/>

      <div class="selects-container">
        
        <h3 style="margin-bottom:20px" >Aplique os filtros desejados</h3>

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
          label="Selecione os professores"
          :items="this.professores"
          multiple
          variant="outlined"
          v-model="professoresSelecionados"
        ></v-autocomplete>
      </div>
      
      
    </v-container>
    
    <div class="card-container">
      <v-row align="center" justify="center">
        <v-col v-for="(ic, i) in this.icsFiltradas" :key="i" cols="auto">
          <CardOferta :iniciacao-cientifica="ic" @click="this.$router.push(`/aluno/ic/id/${ic.id}`)"/>
        </v-col>
      </v-row>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header.vue"
import PageTitle from "@/components/PageTitle.vue"
import PlusIcon from "@/icons/PlusIcon.vue"
import CloseIcon from "@/icons/CloseIcon.vue"
import CardOferta from "@/components/CardOferta.vue"
import Loading from "@/components/Loading.vue";

import { getAllICsDisponiveis } from "@/services/iniciacaoCientifica.js"
import { getTopicos } from "@/services/topicosService.js"
import { getAllProfessores } from "@/services/professorService.js"

import { watch } from 'vue'

export default {
  name: "ListIC",
  components: {
    Header,
    PageTitle,
    PlusIcon,
    CloseIcon,
    CardOferta,
    Loading,
},
  methods: {
    async getIcs() { this.ics = this.icsFiltradas = await getAllICsDisponiveis(); },
    async getTopicos() {
      let tmp = await getTopicos();
      tmp = tmp.map((topico) => topico.nome);
      this.topicos = tmp;
    },
    async getProfessores() {
      let tmp = await getAllProfessores();
      tmp = tmp.map((professor) => professor.nome);
      this.professores = tmp;
    },
    filterCards () {
      this.icsFiltradas = [];

      this.icsFiltradas = this.ics.filter((ic) => {
        if (this.topicosSelecionados.length === 0)
          return true;
        for (let topico of ic.topicos.map(topico => topico.nome)) {
          if (this.topicosSelecionados.includes(topico))
            return true;
        }
        return false;
      })

      this.icsFiltradas = this.icsFiltradas.filter((ic) => {
        if (this.professoresSelecionados.length === 0)
          return true;
        for (let professor of ic.professores.map(prof => prof.nome)) {
          if (this.professoresSelecionados.includes(professor))
            return true;
        }
        return false;
      });
    },
    fechaFiltros() {
      this.filtros = false;
      this.topicosSelecionados = [];
      this.professoresSelecionados = [];
    }
  },
  created() {
    this.getIcs();
    this.getTopicos();
    this.getProfessores()

    this.icsFiltradas = this.ics;

    watch(() => this.topicosSelecionados, this.filterCards);
    watch(() => this.professoresSelecionados, this.filterCards);
  },
  data() {
    return {
      ics: [],
      icsFiltradas: [],
      topicos: [],
      topicosSelecionados: [],
      professores: [],
      professoresSelecionados: [],
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

#closeFiltros:hover {
  cursor: pointer
}

.filter-container {
  display: flex;
  flex-direction: column;
  width: 60vw;
  border-radius: 15px;
  border-width: 1.5px;
  border-color: rgba(0, 0, 0, 0.9);
  border-style: solid;
  margin-top: 30px;
  margin-bottom: 30px;
}

.selects-container {
  align-self: center;
  width: 50vw;
}

.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
}

.container {
  display: flex;
  flex-direction: column;
}

@media (max-width: 700px) {
  .filter-container {
    width: 95vw;
    
  }
  .selects-container {
    width: 85 vw;
  }
}

</style>