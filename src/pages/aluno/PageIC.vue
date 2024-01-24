<template>
    <Header />
    <PageTitle :title="this.icData.nome"/>
  
    <div class="container">
        <div class="row"> 
            <strong>  Professor(es): </strong> 
            <div class="professores">
                <p v-for="p in this.icData.professores"> 
                    {{ p.nome }}
                </p>
            </div>
        </div>

        <div class="row">
            <strong> Tópicos: </strong>
            <div class="topicos">
                <v-chip :color="randChipColor()" v-for="t in this.icData.topicos" class="chip"> 
                    {{ t.nome }}
                </v-chip>
            </div>
        </div>

        <div class="row">
            <strong> Remuneração: </strong> 
            R$ {{ icData.remuneracao }}
        </div>

        <div class="row">
            <strong> Carga horária (semanal): </strong> 
            {{ icData.cargaHorariaSemanal }} horas
        </div>

        <div class="row"> 
            <strong> Descrição: </strong> 
            <textarea readonly cols="30" rows="5"> {{ icData.descricao }} </textarea>
        </div>

        <div class="row">
            <v-btn class="btn">
                Solicitar IC
            </v-btn>    
        </div>
    </div>
    
  </template>
  
  <script>
  import Header from "@/components/Header.vue"
  import PageTitle from "@/components/PageTitle.vue"
  import { getIcById } from "@/services/iniciacaoCientifica.js"
  
  export default {
    name: "PageIc",
    components: {
      Header,
      PageTitle,
    },
    methods: {
        async getIcData() {
            const responseData = await getIcById(this.$route.params.icId);
            this.icData = responseData;
        },
        randChipColor() {
            const colors = [
                'primary',
                'secondary',
                'red',
                'green',
            ]

            let randIndex = Math.floor(Math.random() * 3);

            return colors[randIndex];
        }
    },
    created() {
      this.getIcData();
    },
    data() {
      return {
        icData: null,
      }
    },
  }
  
  </script>
  
  <style scoped>
  
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 25px;
  }
  .row {
    width: 340px;
    margin-top: 25px;
  }
  
  .chip {
    margin-right: 5px; 
  }

  textarea {
    border-width: 1px;
    border-color: rgb(0, 0, 0)
  }

  .btn {
    width: 100%;
    height: 30px;
  }
  
  </style>