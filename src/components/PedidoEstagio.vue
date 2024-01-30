<template>
  <v-container id="content">
    <PageTitle v-if="estagio" :title="`${this.$props.estagio.cargo} em ${this.$props.estagio.empresa}`"/>

    <div v-if="estagio" class="informacao">
      <v-label>Empresa: </v-label>
      <v-card class="infos">
        {{this.$props.estagio.empresa}}
      </v-card>
    </div>

    <div v-if="iniciacaoCientifica" class="informacao">
      <v-label>Tópicos: </v-label>
      <v-card class="infos">
        Desenhar
      </v-card>
    </div>

    <div v-if="estagio" class="row informacao">
      <div class="colElement">
        <v-label>Carga horária:</v-label>
        <v-card class="infos">{{this.$props.estagio.cargaHorariaSemanal}} hr/sem</v-card>
      </div>

      <div v-if="estagio" class="colElement">
        <v-label>Valor da bolsa:</v-label>
        <v-card class="infos">R$ {{this.$props.estagio.remuneracao}}</v-card>
      </div>
    </div>

    <div v-if="estagio" class="informacao">
      <v-label>Vagas:</v-label>
      <v-card class="infos">{{this.$props.estagio.quantidadeVagas}}</v-card>
    </div>

    <div v-if="estagio" class="informacao">
      <v-label>Modalidade:</v-label>
      <v-card class="infos">{{this.$props.estagio.modalidade}}</v-card>
    </div>

    <div v-if="estagio" class="informacao">
      <v-label>Descrição:</v-label>
      <v-card class="infos">{{this.$props.estagio.descricao}}</v-card>
    </div>
  </v-container>
</template>

<script>

import PageTitle from "@/components/PageTitle.vue";
export default {
  name:"PedidoEstagio",
  components: {PageTitle},
  props: {
    estagio: {
      type: Object,
      required: true
    },
    iniciacaoCientifica: {
      type: Object,
    }
  }
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