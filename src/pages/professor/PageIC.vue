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

    <v-card  rounded="xl" style="background-color: var(--green3); margin-top: 20px" min-width="40%">
      <v-tabs bg-color="#CFEEDC" v-model="tab" selected-class="ativo" fixed-tabs>
        <v-tab value="alunos"  rounded="ts-xl">
          Alunos
        </v-tab>
        <v-tab value="professores" rounded="te-xl">
          Professores
        </v-tab>
      </v-tabs>
      <v-container class="tabsContainer">
        <v-window v-model="tab" v-for="(professor) in icData?.professores" key="professor.id" >
          <v-window-item value="professores">
            <ButtonCard :title="professor.nome" :subtitle="'Matrícula: ' + professor.matricula" style="background-color: #CFEEDC"/>
          </v-window-item>
        </v-window>
        <v-window v-model="tab" v-for="(aluno) in icData?.inscricoes" key="aluno.aluno.id" >

          <v-window-item value="alunos" >
            <ButtonCard :title="aluno.aluno.nome" :subtitle="'Matrícula: ' + aluno.aluno.matricula" style="background-color: #CFEEDC"/>
          </v-window-item>

        </v-window>

      </v-container>


    </v-card>

  </div>

</template>

<script>

import {defineComponent} from "vue";
import PageICdescricao from "@/components/IC/PageICdescricao.vue";
import PageTitle from "@/components/PageTitle.vue";
import ChapeuIC from "@/icons/IconeIC.vue";
import {getIcAtivos} from "@/services/IniciacaoCientificaService.js";
import ButtonCard from "@/components/ButtonCard.vue";

export default defineComponent({
  name: "PageIcProfessor",
  components: {
    ButtonCard,
    ChapeuIC,
    PageTitle,
    PageICdescricao
  },
  methods: {
    async listIcParticipantes () {
      this.icData =  await getIcAtivos(this.$route.params.icId);
    }
  },
  data() {
    return {
      icData : null,
      tab: null
    }
  },
  created() {
    this.listIcParticipantes();
  }

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
.tabsContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


/* Fala que não ta sendo usada, mas está sendo usada nos v-tabs */
.ativo {
  background-color: var(--green3);
}
</style>