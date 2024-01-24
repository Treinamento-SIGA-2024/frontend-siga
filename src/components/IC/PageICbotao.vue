<template>
  <v-snackbar :timeout="2500" color="red" elevation="24" v-model="snackbar">
    <span>{{ snackMessage }}</span>
  </v-snackbar>
  <v-dialog>
    <template v-slot:activator="{ props }">
      <v-btn class="buttonCard" stacked elevation="4" v-bind="props">{{
        title
      }}</v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <div class="containerIconTitulo">
          <CheckIcon></CheckIcon>
          <v-card-text> Tem certeza? </v-card-text>
        </div>

        <v-card-actions>
          <v-btn
            class="botaoSim"
            text="Sim"
            @click="() => { createInscricaoIC(); isActive.value = false; }"
          ></v-btn>
          <v-btn
            class="botaoNao"
            text="Não"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import CheckIcon from '@/icons/CheckIconIC.vue';
import {createInscricaoIC} from "@/services/inscricaoICService.js";

export default {
  name: 'PageICBotao',
  components: {
    CheckIcon,
  },
  props: {
    title: String,
  },
  data() {
    return {
      icId: 20,
      alunoId: 8,
      professorId: 4,
      snackbar: false,
      snackMessage: ""
    }
  },
  methods: {
    async createInscricaoIC() {
      try {
        console.log(this.$data)
        await createInscricaoIC(this.icId, this.alunoId, this.professorId);
      } catch (e) {
        this.snackMessage = e.response.data.message;
        this.snackbar = !this.snackbar;
      }
    }
  }
};
</script>

<style scoped>
.buttonCard {
  height: 100px;
  width: 310px;
  align-self: center;
  border-radius: 23px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  margin-top: 30px;
  background-color: #c1debe;
}

.buttonCard:hover {
  cursor: pointer;
  background-color: #86c497;
  transition-duration: 500ms;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.32);
}

.containerIconTitulo {
  padding-top: 1rem;
  display: flex;
  align-items: center;
}

.v-dialog {
  width: 300px;
}

.v-card-text {
  font-size: 1.2rem;
  font-weight: 500;
}

.v-card-actions {
  display: flex;
  justify-content: space-around;
}

.v-btn {
  border-radius: 8px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.5rem;
}

.botaoSim {
  background: #cfeedc;
}

.botaoNao {
  color: #fff;
  background: var(--Dark-Medium, #4f4f4f);
}
</style>
