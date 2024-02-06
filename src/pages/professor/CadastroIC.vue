<template>
  <!-- Notificação de sucesso e erro do cadastro -->
  <v-snackbar v-model="snackbar" timeout="5000">
    <span> {{ snackMessage }}</span>
  </v-snackbar>

  <!-- Ainda eh necessário componentizar essa página  -->
  <!-- Titulo -->
  <v-container>
    <v-card :flat="true">
      <v-card-title>
        <div class="title">Cadastro</div>
      </v-card-title>
    </v-card>
  </v-container>

  <!-- Form de Cadastro da IC -->
  <v-sheet class="mx-auto formWrapper" >
    <v-btn id="limpar" @click="resetForm" style="margin-bottom: 1.5rem" >Limpar</v-btn>
    <v-form fast-fail @submit.prevent class="form" ref="form">
      <v-text-field
          v-model="registrationData.nome"
          ref="textField"
          label="Título da proposta"
          variant="outlined"
          :rules="titleNameRules"
      />

      <!-- Seletor dos tópicos -->
      <v-select
          chips
          v-model="registrationData.topicos"
          :multiple="true"
          label="Selecione o(s) tópico(s) da proposta"
          :items="topicos"
          return-object
          item-title="nome"
          variant="outlined"
          ref="selectField"
      >
      </v-select>
      <div class="camposRow">
        <div class="filhosRow">
          <p class="labelCampos">Remunerado?</p>
          <v-checkbox-btn
              @change="resetRemunecarao"
              :color="this.global.colors.green3"
              v-model="remunerado"
              :label="remunerado ? 'Sim' : 'Não'"
              :rules="[v => !!v || 'Este campo é obrigatório']"
          ></v-checkbox-btn
          >
        </div>

        <div class="filhosRow">

          <v-text-field
              ref="textField"
              prefix="R$"
              :disabled="!remunerado"
              v-model="registrationData.remuneracao"
              variant="outlined"
              :rules="remuneracaoRules"
              label="Valor da bolsa"
          />
        </div>
      </div>
      <div class="inputWrapper">
        <v-select
            chips
            v-model="registrationData.professores"
            :multiple="true"
            label="Selecione o(s) professor(res)"
            :items="lista"
            return-object
            item-title="nome"
            variant="outlined"
            ref="selectFieldProf"
        />

        <v-text-field
            v-model="registrationData.cargaHorariaSemanal"
            label="Carga Horária"
            :rules="chRules"
            variant="outlined"
            ref="textField"
            suffix="horas/sem"
        ></v-text-field>
      </div>

      <v-container>
        <v-row>
          <v-col class="textArea">
            <v-textarea
                label="Descrição da proposta"
                auto-grow
                variant="outlined"
                rows="3"
                row-height="25"
                shaped
                ref="descricao"
                v-model="registrationData.descricao"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>

      <v-btn type="submit" block class="mt-2 registrationBtn" @click="()=>{createIC(), resetForm()}"
      >Cadastrar Proposta
      </v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script>
import {getTopicos} from "@/services/topicosService.js";
import {createIniciacaoCientifica} from "@/services/IniciacaoCientificaService.js";
import {getAllProfessores} from "@/services/professorService.js";

export default {
  name: "CadastroProfessorIC",
  created() {
    this.getTopics();
    this.listProfessores();
  },
  data: () => ({
    // validação dos inputs
    titleNameRules: [
      (value) => {
        if (value !== "") return true;
        return "Por favor, preencha o título da proposta.";
      },
    ],
    valueNameRules: [
      (value) => {
        if (/[^a-zA-ZäöüßÄÖÜ]/.test(value)) return true;
        return "Valor inválido";
      },
    ],
    remuneracaoRules: [
      (value) => {
        if (/^\d*[\,]?\d+$/.test(value)) return true;
        return "Valor inválido";
      }
    ],
    chRules: [
      (value) => {
        if (/^\d*[\,]?\d+$/.test(value)) return true;
        return "Valor inválido";
      }
    ],
    snackbar: false,
    snackMessage: "",
    topicos: [],
    lista: [],
    remunerado: false,
    registrationData: {
      nome: "",
      remuneracao: "",
      cargaHorariaSemanal: "",
      descricao: "",
      topicos: [],
      professores: [],
    },
  }),
  methods: {
    async getTopics() {
      const tops = await getTopicos();
      this.topicos = tops;
      console.log(this.registrationData);
    },
    resetRemunecarao() {
      if (!this.remunerado) {
        this.bolsa = ''
        this.$refs.textField.reset()
      }
    },
    resetForm() {
      this.$refs.form.reset()
      this.remunerado = false
    },
    async listProfessores() {
      const professores = await getAllProfessores()
      this.lista = professores
      console.log(this.registrationData)

    },
    async createIC() {
      try {
        await createIniciacaoCientifica(this.registrationData);
        this.snackMessage = "Legal, você criou uma proposta de IC!";
        this.snackbar = !this.snackbar;
        setTimeout(() => this.$router.push("/professor/pedidos"), 3000);
      } catch (e) {
        this.snackMessage =
            "Não foi possível criar uma iniciação científica!\n" +
            `Erro: ${e.response.data.message}`;
        this.snackbar = !this.snackbar;
      }
    },
  },
};
</script>

<style scoped>
.title {
  color: #282828;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Source Sans Pro;
  color: #666666;
}

.registrationBtn {
  background-color: #cfeedc;
  font-family: Source Sans Pro;
}

.form {
  gap: 15px;
  display: flex;
  flex-direction: column;
  min-width: 45vw;
}

.formWrapper{
  display: flex;
  flex-direction: column;
}
.inputWrapper {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.textArea {
  min-width: 300px;
  @media (min-width: 600px) {
    padding: 0px;
  }
}

#limpar {
  font-size: 12px;
  width: 50px;
  height: 30px;
  color: white;
  background-color: #adadad;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
  align-self: flex-end;
}
.filhosRow {
  display: flex;
  flex-direction: column;
  width: 45%;
}

.camposRow {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
