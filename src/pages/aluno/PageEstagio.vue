<template>
  <v-container>
    <PopUpErro :erro="erro"/>
    <Loading v-if="loading"/>
  </v-container>
  <v-container v-if="!loading && !erro" id="content">
    <PageTitle :title="estagio?.cargo + ' em ' + estagio?.empresa"/>


    <div class="informacao">
      <v-label>Empresa: </v-label>
      <v-card class="infos">
        {{ estagio?.empresa }}
      </v-card>
    </div>

    <div class="row informacao">
      <div class="colElement">
        <v-label>Carga horária:</v-label>
        <v-card class="infos">{{estagio?.cargaHorariaSemanal }} hr/sem</v-card>
      </div>

      <div class="colElement">
        <v-label>Valor da bolsa:</v-label>
        <v-card class="infos">R$ {{estagio?.remuneracao}}</v-card>
      </div>
    </div>

    <div class="informacao">
      <v-label>Vagas:</v-label>
      <v-card class="infos">{{estagio?.quantidadeVagas}}</v-card>
    </div>

    <div class="informacao">
      <v-label>Modalidade:</v-label>
      <v-card class="infos">{{ estagio?.modalidade }}</v-card>
    </div>

    <div class="informacao">
      <v-label>Descrição:</v-label>
      <v-card class="infos">{{ estagio?.descricao }}</v-card>
    </div>

    <ButtonCard title="Contrato" id="btnContrato"
                :style="{height: '8vh'}"/>
  </v-container>
</template>

<script>

import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import Loading from "@/components/Loading.vue";
import {getAllEstagios, getEstagioById} from "@/services/Estagio.js";
import PopUpErro from "@/components/PopUpErro.vue";

export default {
  name: "PedidosEstagioAluno",
  methods: {getAllEstagios},
  data() {
    return {
      estagio: {
        type: Object,
        required: true,
      },
      loading: true,
      erro: false,
    }
  },
  async created() {
    try {
      const estagio = await getEstagioById(this.$route.params.id);
      this.estagio = estagio
    }
    catch (e) {
      this.erro = e.response.data.message;
    }
    this.loading = false;
  },
  components: {
    PopUpErro,
    Loading,
    ButtonCard,
    PageTitle,
  },
}

</script>

<style scoped>
.infos {
  line-height: 40px;
  min-height: 40px;
  background-color: rgba(0, 0, 0, 0.15);
  padding-left: 10px;
  box-shadow: none;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.colElement {
  width: 45%;
}

.informacao {
  margin-bottom: 20px;
}

#btnContrato {
  align-self: center;
}

#content {
  display: flex;
  flex-direction: column;
  min-width: 30vw;
}

</style>