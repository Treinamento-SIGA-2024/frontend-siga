<template>
  <div class="container">
    <PageTitle :title="this.icData?.nome"></PageTitle>
    <Loading v-if="icData == null"/>

    <ChapeuIC v-if="icData != null"/>
    <PageICdescricao 
      v-if="icData != null"
      :professores="this.icData?.professores"
      :topicos="this.icData?.topicos"
      :remuneracao="this.icData?.remuneracao"
      :cargaHorariaSemanal="this.icData?.cargaHorariaSemanal"
      :descricao="this.icData?.descricao"
    ></PageICdescricao>
    <PageICbotao
      v-if="icData != null && !icDoAluno"
      title="Solicitar IC"
      :IniciacaoID="this.$route.params.icId"
    ></PageICbotao>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
import ChapeuIC from '@/icons/IconeIC.vue';
import PageICdescricao from '@/components/IC/PageICdescricao.vue';
import PageICbotao from '@/components/IC/PageICbotao.vue';
import Loading from '@/components/Loading.vue';

import {getIcById, getIcsAlunoInscrito} from '@/services/iniciacaoCientifica.js';
import {getUserBySessao} from "@/services/sessaoService.js";

export default {
  name: 'PageIc',
  components: {
    PageTitle,
    ChapeuIC,
    PageICdescricao,
    PageICbotao,
    Loading,
  },
  methods: {
    async getIcData() {
      const responseData = await getIcById(this.$route.params.icId);
      const icsInscrito = await getIcsAlunoInscrito()
      const icContains = icsInscrito.filter(ic=>ic.id === responseData.id)
      if(icContains.length){
        this.icDoAluno = true
      }
      this.icData = responseData;
    },
  },
  created() {
    this.getIcData();
  },
  data() {
    return {
      icData: null,
      icDoAluno: false
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
}
</style>
