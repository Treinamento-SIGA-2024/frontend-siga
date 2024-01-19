<template>

<Header/>
<PageTitle title="Oferta do Estagio"/>


<div class="informacao">
  <v-label>Empresa:</v-label>
  <v-card class="infos">
    Info da empresa e do cargo disponibilizado
  </v-card>
</div>

<div class="row informacao">
  <div class="colElement">
    <v-label>Carga horária:</v-label>
    <v-card class="infos">Num hr/sem</v-card>
  </div>

  <div class="colElement">
    <v-label>Valor da bolsa:</v-label>
    <v-card class="infos">R$ Num</v-card>
  </div>
</div>

<div class="informacao">
  <v-label>Vagas:</v-label>
  <v-card class="infos">Num</v-card>
</div>

<div class="informacao">
  <v-label>Modalidade:</v-label>
  <v-card class="infos">String</v-card>
</div>

<div class="informacao">
  <v-label>Descrição:</v-label>
  <v-card class="infos">Stringzona</v-card>
</div>

<ButtonCard title="Contrato" id="btnContrato"
            :style="{height: '20px'}"/>

</template>

<script>

import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";

export default {
  name: "PageEstagioAluno",
  data() {
    return {
      estagio: {}
    }
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