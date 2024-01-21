<template>

<Header/>
<PageTitle :title="estagio.cargo + ' em ' + estagio.empresa"/>


<div class="informacao">
  <v-label>Empresa: </v-label>
  <v-card class="infos">
    {{ estagio?.empresa }}
  </v-card>
</div>

<div class="row informacao">
  <div class="colElement">
    <v-label>Carga horária:</v-label>
    <v-card class="infos">{{estagio.cargaHoraria }} hr/sem</v-card>
  </div>

  <div class="colElement">
    <v-label>Valor da bolsa:</v-label>
    <v-card class="infos">R$ {{estagio.valorBolsa}}</v-card>
  </div>
</div>

<div class="informacao">
  <v-label>Vagas:</v-label>
  <v-card class="infos">{{estagio.vagas}}</v-card>
</div>

<div class="informacao">
  <v-label>Modalidade:</v-label>
  <v-card class="infos">{{ estagio.modalidade }}</v-card>
</div>

<div class="informacao">
  <v-label>Descrição:</v-label>
  <v-card class="infos">{{ estagio.cargo }}</v-card>
</div>

<ButtonCard title="Contrato" id="btnContrato"
            :style="{height: '20px'}"/>

</template>

<script>

import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";
import {getEstagioById} from "@/services/Estagio.js";

export default {
  name: "PageEstagioAluno",
  data() {
    return {
      estagio: {
        type: Object,
        required: true,
      }
    }
  },
  async created() {
    const estagio = await getEstagioById(this.$route.params.id);
    this.estagio = estagio
  },
  components: {
    ButtonCard,
    Header,
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
</style>