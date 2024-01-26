<template>
  <PageTitle title="NOVO TÓPICO"/>

  <v-container>
    <v-form id="form">

      <v-btn id="limpar" @click="resetForm">Limpar</v-btn>

      <p>Título:</p>
      <v-text-field v-model="titulo" variant="outlined"
                    :rules="[v => !!v || 'Este campo é obrigatório']"/>

      <p>Descrição:</p>
      <v-textarea v-model="descricao" variant="outlined"
                  :rules="[v => !!v || 'Este campo é obrigatório']"/>

      <div id="submit">
        <ButtonCard id="salvar" title="Salvar"
                    :style="{height: '50px'}"/>
        <ButtonCard id="cancelar" title="Cancelar"
                    :style="{height: '50px'}"/>
      </div>

    </v-form>
  </v-container>

</template>

<script>

import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";

export default {
  name: "SecretariaCreateTopico",
  data() {
    return {
      titulo: '',
      descricao: '',
    }
  },
  components: {
    PageTitle,
    ButtonCard,
  },
  methods: {
    resetForm() {
      this.titulo = '';
      this.descricao = '';
    },
  }
}

</script>

<style scoped>

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

#submit {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#salvar {
  width: 150px;
  color: white;
  background-color: #27AE60;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

#cancelar {
  width: 150px;
  color: white;
  background-color: #EB5757;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.21);
}

</style>