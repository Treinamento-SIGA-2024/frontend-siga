<template>
  <v-container id="content">
    <PageTitle v-if="estagio" :title="`${this.$props.estagio.cargo} em ${this.$props.estagio.empresa}`"/>
    <PageTitle v-if="iniciacaoCientifica" :title="`${iniciacaoCientifica.nome}`"/>

    <div v-if="estagio" class="informacao">
      <v-label>Empresa: </v-label>
      <v-card class="infos">
        {{this.$props.estagio.empresa}}
      </v-card>
    </div>

    <div v-if="iniciacaoCientifica" class="informacao">
      <v-label>Tópicos: </v-label>
      <v-card class="infos">
      <div style="display: flex">
        <p style="width: fit-content; margin-right: 5px;" v-for="(topico, i) in iniciacaoCientifica.topicos" :key="i" cols="auto">
            {{topico.nome}};
        </p>
      </div>
      </v-card>
    </div>

    <div class="row informacao">
      <div class="colElement">
        <v-label>Carga horária:</v-label>
        <v-card v-if="estagio" class="infos">{{this.$props.estagio.cargaHorariaSemanal}} hr/sem</v-card>
        <v-card v-if="iniciacaoCientifica" class="infos">{{this.$props.iniciacaoCientifica.cargaHorariaSemanal}} hr/sem</v-card>
      </div>

      <div class="colElement">
        <v-label>Valor da bolsa:</v-label>
        <v-card v-if="estagio" class="infos">R$ {{this.$props.estagio.remuneracao}}</v-card>
        <v-card v-if="iniciacaoCientifica" class="infos">R$ {{this.$props.iniciacaoCientifica.remuneracao}}</v-card>
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

    <div v-if="iniciacaoCientifica" class="informacao">
      <v-label>Professor(es): </v-label>
      <v-card class="infos">
        <div style="display: flex">
          <p style="width: fit-content; margin-right: 5px;" v-for="(professor, i) in iniciacaoCientifica.professores" :key="i" cols="auto">
            {{professor.nome}};
          </p>
        </div>
      </v-card>
    </div>

    <div class="informacao">
      <v-label>Descrição:</v-label>
      <v-card v-if="estagio" class="infos">{{this.$props.estagio.descricao}}</v-card>
      <v-card v-if="iniciacaoCientifica" class="infos">{{this.$props.iniciacaoCientifica.descricao}}</v-card>
    </div>
  </v-container>
</template>

<script>

import PageTitle from "@/components/PageTitle.vue";
export default {
  name:"InfoPedido",
  components: {PageTitle},
  props: {
    estagio: {
      type: Object,
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