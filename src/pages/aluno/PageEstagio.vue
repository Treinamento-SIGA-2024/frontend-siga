  <template>
  <Header/>
  <PageTitle title="Oferta do Estagio"/>
  <p>Função:</p>
  <v-text-field/>

  <p>Nome da Empresa:</p>
  <v-text-field/>

  <div class="camposRow">
    <div class="filhosRow">
      <p class="labelCampos">Remunerado? </p>
      <v-checkbox-btn :color="this.global.colors.green3" v-model="remunerado"
                      :label="remunerado ? 'Sim' : 'Não'"></v-checkbox-btn>
    </div>

    <div class="filhosRow">
      <p class="labelCampos">Valor da bolsa:</p>
      <v-text-field prefix="R$" :disabled="!remunerado"/>
    </div>
  </div>

  <div class="camposRow">
    <div class="filhosRow">
      <p>Carga Horária:</p>
      <v-text-field suffix="horas/sem"/>
    </div>

    <div class="filhosRow">
      <p>Vagas disponíveis:</p>
      <v-text-field/>
    </div>
  </div>

  <p>Modalidade:</p>
  <div id="selectDiv">
    <v-select class="select" label="Selecione"
              :items="['Remoto','Híbrido','Presencial']"/>
  </div>

  <p>Descrição:</p>
  <v-textarea/>

  <div id="submit">
    <ButtonCard id="salvar" title="Salvar"
                :style="{height: '50px'}"/>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import PageTitle from "@/components/PageTitle.vue";
import ButtonCard from "@/components/ButtonCard.vue";

export default {
  name: "PageEstagioAluno",
  components: {
    ButtonCard,
    Header,
    PageTitle,
  }
}

</script>

<style scoped>

</style>