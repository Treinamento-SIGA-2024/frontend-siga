<template>
  <v-container class="estagioContainer" v-if="estagio">
    <v-card-title style="line-break: auto">{{
      estagio.estagio.cargo
    }}</v-card-title>
    <v-container>
      <p>
        <strong>Empresa: </strong>
      </p>
      <v-card
        color="#C1DEBE"
        height="51px"
        class="d-flex align-center justify-center"
      >
        {{ estagio.estagio.empresa }}
      </v-card>

      <v-container class="infoContainer">
        <div>
          <strong>Carga Horária:</strong>
          <p>
            <v-card
              color="#C1DEBE"
              height="51px"
              class="d-flex align-center justify-center"
            >
              {{ estagio.estagio.cargaHorariaSemanal }} h/sem
            </v-card>
          </p>
        </div>

        <div>
          <strong>Remuneração:</strong>
          <v-card
            color="#C1DEBE"
            height="51px"
            class="d-flex align-center justify-center"
          >
            R$ {{ estagio.estagio.remuneracao }},00
          </v-card>
        </div>
      </v-container>

      <v-container
        class="infoContainer"
        style="display: flex; flex-direction: row; justify-content: start"
      >
        <v-card flat="true" style="padding-right: 12px">
          <strong>Quantidade de Vagas:</strong></v-card
        >
        <v-card
          color="#C1DEBE"
          style="text-align: center"
          max-height="24"
          min-width="24"
          width="fit-content"
        >
          {{ estagio.estagio.quantidadeVagas }}
        </v-card>
      </v-container>

      <v-container
        class="infoContainer"
        style="display: flex; flex-direction: row; justify-content: start"
      >
        <v-card flat="true" style="padding-right: 12px"
          ><strong>Modalidade:</strong></v-card
        >
        <v-card
          color="#C1DEBE"
          style="text-align: center"
          height="24"
          min-width="84"
          width="fit-content"
          >{{ estagio.estagio.modalidade }}</v-card
        >
      </v-container>
      <strong>Descrição:</strong>
      <v-card
        rounded="l"
        style="
          padding: 10px 10px;
          text-align: center;
          background-color: #c1debe;
        "
        >{{ estagio.estagio.descricao }}</v-card
      >
    </v-container>

    <v-container class="alunoContainer">
      <v-card-title>Informações do Aluno</v-card-title>
      <v-card-text>
        <p><strong>Nome:</strong></p>
        <v-card
          color="#C1DEBE"
          height="30px"
          class="d-flex align-center justify-center"
        >
          {{ estagio.aluno.nome }}
        </v-card>

        <v-container class="infoContainer">
          <div>
            <strong>Matrícula:</strong>
            <p>
              <v-card
                color="#C1DEBE"
                height="30px"
                class="d-flex align-center justify-center"
                style="padding: 10px"
              >
                {{ estagio.aluno.matricula }}
              </v-card>
            </p>
          </div>
          <div>
            <strong>Email:</strong>
            <v-card
              color="#C1DEBE"
              height="30px"
              class="d-flex align-center justify-center"
              style="padding: 10px; max-width: 210px; word-break: break-all"
            >
              {{ estagio.aluno.email }}
            </v-card>
          </div>
        </v-container>
      </v-card-text>
    </v-container>
    <v-container>
      <v-row justify="space-evenly">
        <v-dialog v-model="dialog" persistent="true" width="auto">
          <template v-slot:activator="{ props }">
            <v-btn
              rounded="xl"
              color="#27AE60"
              v-bind="props"
              @click="
                () => {
                  action = 'aprovar';
                }
              "
            >
              Aprovar
            </v-btn>
            <v-btn
              color="#EB5757"
              rounded="xl"
              v-bind="props"
              @click="
                () => {
                  action = 'rejeitar';
                }
              "
            >
              Negar
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">Tem certeza? </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red-darken-1"
                variant="text"
                @click="dialog = false"
              >
                Não
              </v-btn>
              <v-btn
                color="green-darken-1"
                variant="text"
                @click="
                  () => {
                    dialog = false;
                    console.log(action);
                    if (action === 'aprovar') {
                      aprovarEstagio(this.estagio.id);
                    }
                    if (action === 'rejeitar') {
                      rejeitarEstagio(this.estagio.id);
                    }
                  }
                "
              >
                Sim
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-container>
  <v-Btn class="backIcon" @click="goToEstagios" color="#666666" rounded="xl">
    <GoBackIcon />
    Voltar
  </v-Btn>

  <v-container class="loadingContainer" v-if="!estagio">
    <v-progress-circular
      color="#C1DEBE"
      size="x-large"
      indeterminate
    ></v-progress-circular>
  </v-container>
</template>

<script>
import {
  aprovarEstagio,
  getEstagio,
  rejeitarEstagio,
} from "@/services/coordenadorService.js";
import GoBackIcon from "@/icons/GoBackIcon.vue";

export default {
  components: { GoBackIcon },
  data() {
    return {
      estagio: null,
      dialog: false,
      action: "",
    };
  },
  methods: {
    async getEstagio() {
      const estagioId = this.$route.params.estagioId;
      this.estagio = await getEstagio(estagioId);
    },
    goToEstagios() {
      this.$router.push({ name: "ListEstagioCoordenador" });
    },
    async aprovarEstagio() {
      await aprovarEstagio(this.estagio.id);
    },
    async rejeitarEstagio() {
      await rejeitarEstagio(this.estagio.id);
    },
  },
  created() {
    this.getEstagio();
  },
};
</script>

<style scoped>
.backIcon {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px auto;
  width: 40%;
}
.loadingContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.estagioContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0 auto;
  max-width: 900px;
}

.infoContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 10px 0;
}

.alunoContainer {
  padding: 0;
}

.emailCard {
  max-width: 200px;
}
</style>
