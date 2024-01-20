<template>
  <v-container v-if="estagio">
    <v-card-text>
      <v-card-title
        >{{ estagio.estagio.cargo }} -
        {{ estagio.estagio.empresa }}</v-card-title
      ><v-card-text>
        <p><strong>Descrição:</strong> {{ estagio.estagio.descricao }}</p>
        <p>
          <strong>Quantidade de Vagas:</strong>
          {{ estagio.estagio.quantidadeVagas }}
        </p>
        <p>
          <strong>Carga Horária Semanal:</strong>
          {{ estagio.estagio.cargaHorariaSemanal }} horas
        </p>
        <p>
          <strong>Remuneração:</strong> R$ {{ estagio.estagio.remuneracao }}
        </p>
        <p>
          <strong>Modalidade:</strong> {{ estagio.estagio.modalidade }}
        </p></v-card-text
      >

      <v-card-title>Informações do Aluno</v-card-title>
      <v-card-text>
        <p><strong>Nome:</strong> {{ estagio.aluno.nome }}</p>
        <p><strong>Matrícula:</strong> {{ estagio.aluno.matricula }}</p>
        <p><strong>Email:</strong> {{ estagio.aluno.email }}</p>
      </v-card-text>

      <v-card-title>Situação da Inscrição</v-card-title>
      <v-card-text>{{ estagio.situacaoInscricao.descricao }}</v-card-text>
    </v-card-text>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent width="auto">
        <template v-slot:activator="{ props }">
          <v-btn color="green-darken-1" v-bind="props"> Aprovar </v-btn>
          <v-btn color="red-darken-1" v-bind="props"> Negar </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">Tem certeza? </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red-darken-1" variant="text" @click="dialog = false">
              Não
            </v-btn>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Sim
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>

  <v-container class="loadingContainer" v-if="!estagio">
    <v-progress-circular
      color="#C1DEBE"
      size="x-large"
      indeterminate
    ></v-progress-circular>
  </v-container>

  <v-btn @click="goToEstagios()">Voltar para estágios</v-btn>
</template>

<script scoped>
import { getEstagio } from "@/services/coordenadorService.js";
export default {
  data() {
    return {
      estagio: null,
      dialog: false,
    };
  },
  methods: {
    async getEstagio() {
      const estagioId = this.$route.params.estagioId;
      this.estagio = await getEstagio(estagioId);
    },
  },
  created() {
    this.getEstagio();
  }
}
</script>

<style scoped>
.loadingContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
