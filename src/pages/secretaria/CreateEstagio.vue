<template>
  <div id="popDiv" v-if="popUpTemCerteza">
    <PopUp :acoes="metodos" />
  </div>
  <PageTitle title="Criar oferta de estágio" />
  <v-container v-model="formValido">
    <v-form id="form" v-model="formValido">
      <v-btn id="limpar" @click="resetForm">Limpar</v-btn>

      <p>Função:</p>
      <v-text-field
        v-model="funcao"
        variant="outlined"
        :rules="[v => !!v || 'Este campo é obrigatório']"
      />

      <p>Nome da Empresa:</p>
      <v-text-field
        v-model="empresa"
        variant="outlined"
        :rules="[v => !!v || 'Este campo é obrigatório']"
      />

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
          >/
        </div>

        <div class="filhosRow">
          <p class="labelCampos">Valor da bolsa:</p>
          <v-text-field
            ref="textField"
            prefix="R$"
            :disabled="!remunerado"
            v-model="bolsa"
            variant="outlined"
            :rules="[
              v => !!v || 'Este campo é obrigatório',
              v => /^\d*[\.]?\d+$/.test(v) || 'Digite apenas números',
            ]"
          />
        </div>
      </div>

      <div class="camposRow">
        <div class="filhosRow">
          <p>Carga Horária:</p>
          <v-text-field
            suffix="horas/sem"
            v-model="horas"
            variant="outlined"
            :rules="[
              v => !!v || 'Este campo é obrigatório',
              v => /^\d+$/.test(v) || 'Digite apenas números',
            ]"
          />
        </div>

        <div class="filhosRow">
          <p>Vagas disponíveis:</p>
          <v-text-field
            v-model="vagas"
            variant="outlined"
            :rules="[
              v => !!v || 'Este campo é obrigatório',
              v => /^\d+$/.test(v) || 'Digite apenas números',
            ]"
          />
        </div>
      </div>

      <p>Modalidade:</p>
      <div id="selectDiv">
        <v-select
          v-model="modalidade"
          variant="outlined"
          id="select"
          label="Selecione"
          :items="itens"
          :rules="[v => !!v || 'Este campo é obrigatório']"
        />
      </div>

      <p>Descrição:</p>
      <v-textarea
        v-model="descricao"
        variant="outlined"
        :rules="[v => !!v || 'Este campo é obrigatório']"
      />

      <div id="submit">
        <ButtonCard
          id="salvar"
          title="Salvar"
          :style="{ height: '50px' }"
          @click="popUpTemCerteza = true"
        />
        <ButtonCard
          id="cancelar"
          title="Cancelar"
          :style="{ height: '50px' }"
          @click="this.$router.push('/secretaria')"
        />
      </div>
    </v-form>
    <v-snackbar v-model="erro.have" color="red">
      <div id="snackErro">
        <v-card-text id="erroText">Erro: {{ erro.msg }}</v-card-text>
        <v-btn @click="erro.have = false">X</v-btn>
      </div>
    </v-snackbar>
  </v-container>
</template>

<script>
import Header from '@/components/Header.vue'
import PageTitle from '@/components/PageTitle.vue'
import ButtonCard from '@/components/ButtonCard.vue'
import '@mdi/font/css/materialdesignicons.css'
import { createEstagio } from '@/services/Estagio.js'
import PopUp from '@/components/PopUp.vue'
import PopUpErro from '@/components/PopUpErro.vue'

export default {
  name: 'SecretariaInicial',
  data() {
    return {
      popUpTemCerteza: false,

      erro: {
        have: false,
        msg: '',
      },
      formValido: false,
      funcao: '',
      empresa: '',
      remunerado: false,
      bolsa: '',
      horas: '',
      vagas: '',
      modalidade: null,
      itens: ['Remoto', 'Híbrido', 'Presencial'],
      descricao: '',

      metodos: {
        msg: 'Deseja enviar a proposta?',
        aceitarAction: this.submit,
        cancelarAction: () => {
          this.popUpTemCerteza = false
        },
      },
    }
  },

  methods: {
    resetRemunecarao() {
      if (!this.remunerado) {
        this.bolsa = ''
        this.$refs.textField.reset()
      }
    },
    resetForm() {
      this.funcao = ''
      this.empresa = ''
      this.remunerado = false
      this.bolsa = 0
      this.horas = ''
      this.vagas = ''
      this.modalidade = null
      this.descricao = ''
    },
    async submit() {
      if (this.formValido) {
        await createEstagio({
          cargo: this.funcao,
          empresa: this.empresa,
          remuneracao: this.remunerado ? this.bolsa : 0,
          cargaHorariaSemanal: this.horas,
          quantidadeVagas: this.vagas,
          modalidade: this.modalidade,
          descricao: this.descricao,
        })
        this.resetForm()
      } else {
        this.erro.have = true
        this.erro.msg = 'Dados inválidos'
      }
      this.popUpTemCerteza = false
    },
  },

  components: {
    PopUpErro,
    PopUp,
    title: String,
    Header,
    PageTitle,
    ButtonCard,
  },
}
</script>

<style scoped>
#select {
  height: 20px;
}

#form {
  display: flex;
  flex-direction: column;
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

#salvar {
  width: 150px;
  color: white;
  background-color: #27ae60;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

#cancelar {
  width: 150px;
  color: white;
  background-color: #eb5757;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

#selectDiv {
  height: 80px;
}

#submit {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#popDiv {
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

#erroText {
  font-weight: bold;
  font-size: 16px;
}

#snackErro {
  display: flex;
  flex-direction: row;
}

.labelCampos {
  width: fit-content;
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
