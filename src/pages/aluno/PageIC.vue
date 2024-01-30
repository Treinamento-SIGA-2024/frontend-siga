<template>
  <div class="container">
    <PageTitle :title="this.icData?.nome"></PageTitle>
    <ChapeuIC />
    <PageICdescricao
      :professores="this.icData?.professores"
      :topicos="this.icData?.topicos"
      :remuneracao="this.icData?.remuneracao"
      :cargaHorariaSemanal="this.icData?.cargaHorariaSemanal"
      :descricao="this.icData?.descricao"
    ></PageICdescricao>
    <PageICbotao
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

import { getIcById } from '@/services/iniciacaoCientifica.js';

export default {
  name: 'PageIc',
  components: {
    PageTitle,
    ChapeuIC,
    PageICdescricao,
    PageICbotao,
  },
  methods: {
    async getIcData() {
      const responseData = await getIcById(this.$route.params.icId);
      this.icData = responseData;
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
