<template>
  <div class="container">
    <PageTitle :title="this.icData?.nome"></PageTitle>
    <ChapeuIC />
    <PageICdescricao
      :professores="this.icData?.professores"
      :topicos="this.icData?.topicos"
      :remuneracao="this.icData?.remuneracao"
      :cargaHorariaSemanal="this.icData?.cargaHorariaSemanal"
      :descricao="this.icData?.descricao"
    ></PageICdescricao>
    <!--A parte acima foi copiada da página do Aluno-Ver uma IC. Copiamos apenas para ter uma base de como ficaria a listagem dos participantes-->

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
      >
        <v-tab
          value="alunos"
          rounded="ts-xl"
          @click="this.btnClass = 'botaoInativo'"
        >
          Alunos
        </v-tab>
        <v-tab
          value="professores"
          rounded="te-xl"
          @click="this.btnClass = 'botaoAtivo'"
        >
          Professores
        </v-tab>
      </v-tabs>

      <v-container class="tabsContainer">
        <v-dialog v-model="dialog" width="80%" persistent>
          <template v-slot:activator="{ props }">
            <v-btn
              :class="this.btnClass"
              style="background-color: #cfeedc"
              v-bind="props"
              @click="listProfessores"
            >
              <PlusIcon />
              cadastrar professor
            </v-btn>
          </template>
          <v-card>
            <v-autocomplete
              label="Insira o nome do professor..."
              :items="this.nomesProfessores"
              v-model="professorSelecionado"
            >
            </v-autocomplete>
            <v-card-actions>
              <v-btn @click="sendCadastro" color="primary"> Cadastrar </v-btn>

              <v-btn @click="dialog = false" color="red"> Cancelar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-window v-model="tab">
          <v-window-item value="professores">
            <ButtonCard
              :title="professor.nome"
              :subtitle="'Matrícula: ' + professor.matricula"
              style="
                background-color: #cfeedc;
                display: flex;
                align-self: center;
              "
              v-for="professor in icData?.professores"
              :key="professor.id"
            />
          </v-window-item>

          <v-window-item value="alunos">
            <h3 v-if="icData?.inscricoes.length === 0" style="color: white">
              Não há alunos partipando dessa IC no momento.
            </h3>
            <ButtonCard
              @click="deletarAluno(aluno.id)"
              :title="aluno.aluno.nome"
              :subtitle="'Matrícula: ' + aluno.aluno.matricula"
              style="
                background-color: #cfeedc;
                display: flex;
                align-self: center;
              "
              v-for="aluno in icData?.inscricoes"
              :key="aluno.aluno.id"
              textoBotao="Remover da IC"
            />
          </v-window-item>
        </v-window>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import PageICdescricao from '@/components/IC/PageICdescricao.vue'
import PageTitle from '@/components/PageTitle.vue'
import ChapeuIC from '@/icons/IconeIC.vue'
import {
  addProfessorToIc,
  getIcAtivos,
} from '@/services/IniciacaoCientificaService.js'
import ButtonCard from '@/components/ButtonCard.vue'
import PlusIcon from '@/icons/PlusIcon.vue'
import { getAllProfessores } from '@/services/professorService.js'
import { deletarAlunoIC } from '@/services/professorService.js'

export default defineComponent({
  name: 'PageIcProfessor',
  components: {
    PlusIcon,
    ButtonCard,
    ChapeuIC,
    PageTitle,
    PageICdescricao,
  },
  methods: {
    async listIcParticipantes() {
      try {
        this.icData = await getIcAtivos(this.$route.params.icId)
      }
      catch (err) {
				this.$emit("erro", err);
			}
    },
    async listProfessores() {
      try {
        this.professores = await getAllProfessores()
        this.nomesProfessores = this.professores.map(professor => professor.nome)
      } catch (err) {
				this.$emit("erro", err);
			}
    },
    async sendCadastro() {
      try {
        const index = this.nomesProfessores.indexOf(this.professorSelecionado)
        const professor = this.professores[index]
        await addProfessorToIc(this.$route.params.icId, professor)
        this.$emit("sucesso", "Professor vinculado com sucesso!")
        this.listIcParticipantes()
      } catch (err) {
				this.$emit("erro", err);
			}
      this.dialog = false
    },
    async deletarAluno(inscricaoId) {
      try {
        await deletarAlunoIC(inscricaoId)
        this.listIcParticipantes()
      } catch (err) {
				this.$emit("erro", err);
			}
    },
  },
  data() {
    return {
      icData: null,
      tab: 'alunos',
      btnClass: 'botaoInativo',
      dialog: false,
      professores: [],
      nomesProfessores: [],
      professorSelecionado: '',
    }
  },
  created() {
    this.listIcParticipantes()
  },
})
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
}
.tabsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Fala que não ta sendo usada, mas está sendo usada nos v-tabs */
.ativo {
  background-color: var(--green3);
  opacity: 100%;
  color: black;
}

.botaoInativo {
  display: none;
}

.botaoAtivo {
  display: block;
}
</style>
