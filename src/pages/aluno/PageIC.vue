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
      v-if="icData != null"
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

import { getIcById } from '@/services/iniciacaoCientifica.js';

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
      try {
        const responseData = await getIcById(this.$route.params.icId);
        this.icData = responseData;
      }
      catch (err) {
        this.$emit("erro", err);
      }
    },
  },
  created() {
    this.getIcData();
  },
  data() {
    return {
      icData: null,
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
