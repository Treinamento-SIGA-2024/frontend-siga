<template>
  <PageTitle title="Propostas de Estágio" />
  <Loading v-if="estagios.length === 0" />

  <v-btn v-if="!filtros && !snackbar" id="addFiltro" @click="filtros = true">
    <PlusIcon />
    <p>Adicionar filtros</p>
  </v-btn>

  <v-container v-if="filtros" class="filter-container">
    <CloseIcon @Click="fechaFiltros" id="closeFiltros" alt="Cancelar filtros" />

    <div class="selects-container">
      <h3 style="margin-bottom: 20px">Aplique os filtros desejados</h3>

      <v-autocomplete
        clearable
        label="Selecione as empresas"
        :items="this.empresas"
        multiple
        variant="outlined"
        v-model="empresasSelecionadas"
      ></v-autocomplete>

      <v-autocomplete
        clearable
        label="Selecione os cargos"
        :items="this.cargos"
        multiple
        variant="outlined"
        v-model="cargosSelecionados"
      ></v-autocomplete>

      <v-autocomplete
        clearable
        label="Selecione as modalidades"
        :items="this.modalidades"
        multiple
        variant="outlined"
        v-model="modalidadesSelecionadas"
      ></v-autocomplete>
    </div>
  </v-container>

  <v-container id="content">
    <v-row
      align="center"
      justify="center"
      v-if="estagiosFiltrados.length !== 0"
    >
      <v-col v-for="estagio in estagiosFiltrados" :key="estagio.id" cols="auto">
        <CardOferta
          :estagio="estagio"
          @click="this.$router.push(`/aluno/estagio/id/${estagio.id}`)"
        />
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar v-model="snackbar" :timeout="1000 * 1000">
    <span> {{ error }}</span>
  </v-snackbar>
</template>

<script>
import Header from '@/components/Header.vue'
import ButtonCard from '@/components/ButtonCard.vue'
import PageTitle from '@/components/PageTitle.vue'
import {
  getAllEstagios,
  getEmpresas,
  getCargos,
  getModalidades,
} from '@/services/Estagio.js'
import Loading from '@/components/Loading.vue'
import CardOferta from '@/components/CardOferta.vue'
import CloseIcon from '@/icons/CloseIcon.vue'

import { watch } from 'vue'

export default {
  name: 'ListEstagioAluno',
  created() {
    this.estagios = this.getEstagios()

    watch(() => this.empresasSelecionadas, this.filterCards)
    watch(() => this.cargosSelecionados, this.filterCards)
    watch(() => this.modalidadesSelecionadas, this.filterCards)
  },
  data() {
    return {
      estagios: [],
      filtros: false,
      snackbar: false,
      error: '',

      empresas: [],
      empresasSelecionadas: [],
      cargos: [],
      cargosSelecionados: [],
      modalidades: [],
      modalidadesSelecionadas: [],
      estagiosFiltrados: [],
    }
  },
  components: {
    Loading,
    Header,
    PageTitle,
    ButtonCard,
    CardOferta,
    CloseIcon,
  },
  methods: {
    async getEstagios() {
      try {
        const estagios = await getAllEstagios()
        this.estagios = estagios
      } catch (err) {
        if (!err.response || err.response.data.status === 500) {
          this.error = 'Erro do servidor.'
          this.snackbar = !this.snackbar
          this.estagios = []
        } else {
          this.error =
            'Não foi possível acessar as Iniciações Cientítficas.\n' +
            `Erro: ${err.response.data.message}`
          this.snackbar = !this.snackbar
          this.estagios = []
        }
      }
      this.estagiosFiltrados = this.estagios
      this.empresas = getEmpresas(this.estagios)
      this.cargos = getCargos(this.estagios)
      this.modalidades = getModalidades(this.estagios)
    },
    filterCards() {
      this.estagiosFiltrados = this.estagios.filter(estagio => {
        if (this.empresasSelecionadas.length === 0) return true
        return this.empresasSelecionadas.includes(estagio.empresa)
      })

      this.estagiosFiltrados = this.estagiosFiltrados.filter(estagio => {
        if (this.cargosSelecionados.length === 0) return true
        return this.cargosSelecionados.includes(estagio.cargo)
      })

      this.estagiosFiltrados = this.estagiosFiltrados.filter(estagio => {
        if (this.modalidadesSelecionadas.length === 0) return true
        return this.modalidadesSelecionadas.includes(estagio.modalidade)
      })
    },
    fechaFiltros() {
      this.filtros = false
      this.cargosSelecionados = []
      this.empresasSelecionadas = []
      this.modalidadesSelecionadas = []
    },
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
  cursor: pointer;
}

#content {
  display: flex;
  justify-content: center;
  align-items: center;
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

@media (max-width: 700px) {
  .filter-container {
    width: 95vw;
  }
  .selects-container {
    width: 85 vw;
  }
}
</style>
