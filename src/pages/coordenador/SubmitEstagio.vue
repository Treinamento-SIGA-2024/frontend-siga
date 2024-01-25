<template>
  <Loading  v-if="!estagio" class="loadingContainer"/>
  <v-container class="estagioContainer" v-if="estagio">
    <v-card-title style="line-break: auto">
      {{
        estagio.estagio.cargo
      }}
    </v-card-title>

    

    <v-container>
        <strong>Empresa: </strong>
      <v-card
        color="var(--green0)"
        height="51px"
        class="d-flex align-center justify-center"
      >
        {{ estagio.estagio.empresa }}
      </v-card>

      <v-container class="infoContainer">
        <div style="width: 40%;">
          <strong>Carga Horária:</strong>
            <v-card
              color="var(--green0)"
              height="51px"
              width="100%"
              class="d-flex align-center justify-center"
            >
              {{ estagio.estagio.cargaHorariaSemanal }} h/sem
            </v-card>
        </div>

        <div style="width: 40%;">
          <strong>Remuneração:</strong>
          <v-card
            color="var(--green0)"
            height="51px"
            class="d-flex align-center justify-center"
          >
            R$ {{ estagio.estagio.remuneracao }},00
          </v-card>
        </div>
      </v-container>

      <v-container class="changingInfoContainer">
        <div 
          style="
            display: flex;
            align-items: center;
        ">
          <strong style="padding-right: 10px;">Vagas:</strong>
          <v-card
            color="var(--green0)"
            style="text-align: center"
            min-height="30px"
            min-width="30px"
            class="d-flex align-center justify-center"
            >
            {{ estagio.estagio.quantidadeVagas }}
          </v-card>
        </div>

        

        <div 
          style="
            display: flex;
            align-items: center;
          ">
          <strong style="padding-right: 10px;">Modalidade:</strong>
          <v-card
            color="var(--green0)"
            style="text-align: center"
            min-width="85px"
            width="fit-content"
            height="30px"
            class="d-flex align-center justify-center"
            >
            {{ estagio.estagio.modalidade }}
          </v-card>
        </div>
      </v-container>
      <strong>Descrição:</strong>
      <v-card
        rounded="l"
        style="
          padding: 10px 10px;
          text-align: center;
          background-color: var(--green0);
        "
        >{{ estagio.estagio.descricao }}
      </v-card>
    </v-container>

    <v-container class="alunoContainer">
      <v-card-title style="text-align: center;">Informações do Aluno</v-card-title>
      <v-card-text>
        <strong>Nome:</strong>
        <v-card
          color="var(--green0)"
          class="d-flex align-center justify-center"
          height="51px"
        >
          {{ estagio.aluno.nome }}
        </v-card>

        <v-container class="infoContainer">
          <div style="width: 40%;">
            <strong>Matrícula:</strong>
              <v-card
                color="var(--green0)"
                class="d-flex align-center justify-center"
                style="padding: 10px"
              >
                {{ estagio.aluno.matricula }}
              </v-card>
          </div>
          <div style="width: 40%;">
            <strong>Email:</strong>
            <v-card
              color="var(--green0)"
              class="d-flex align-center justify-center"
              style="padding: 10px;  word-break: break-all"
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
</template>

<script>
import {
  aprovarEstagio,
  getEstagio,
  rejeitarEstagio,
} from "@/services/coordenadorService.js";
import GoBackIcon from "@/icons/GoBackIcon.vue";
import Loading from "@/components/Loading.vue";

export default {
  components: { GoBackIcon, Loading },
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
  max-width: 200px;
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

@media (min-width: 700px) {
  .infoContainer{

  }
}

.changingInfoContainer {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 1.5rem 0;
}

.alunoContainer {
  padding: 0;
}

.emailCard {
  max-width: 200px;
}
</style>
