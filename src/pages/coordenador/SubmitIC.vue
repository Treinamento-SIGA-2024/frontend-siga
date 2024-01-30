<template>
    <div class="container">
        <PageTitle :title="this.propostaIc.nome"/>
        <ChapeuIC />
        <PageICdescricao 
            :professores="this.propostaIc.professores"
            :topicos="this.propostaIc.topicos"
            :remuneracao="this.propostaIc.remuneracao"
            :cargaHorariaSemanal="this.propostaIc.cargaHorariaSemanal"
            :descricao="this.propostaIc.descricao"
        />
        <div class="buttons-container">
            <v-btn
                rounded="xl"
                color="#27AE60"
                v-bind="props"
                @click="this.aprovarIC()"
            >
                Aprovar
            </v-btn>
            <v-btn
                color="#EB5757"
                rounded="xl"
                v-bind="props"
                @click="this.rejeitarIC()"
            >
                Negar
            </v-btn>
        </div>
    </div>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import ChapeuIC from '@/icons/IconeIC.vue';
import PageICdescricao from '@/components/IC/PageICdescricao.vue';
import PageICbotao from '@/components/IC/PageICbotao.vue';

import { getIcById } from "@/services/iniciacaoCientifica.js";
import { 
    aprovarIC,
    rejeitarIC 
} from "@/services/coordenadorService.js";

export default {
    name: "SubmitICCoordenador",
    components: {
        PageTitle,
        ChapeuIC,
        PageICdescricao,
        PageICbotao,
    },
    methods: {
        async getPropostaIc() {
            const responseData = await getIcById(this.$route.params.icId);
            this.propostaIc = responseData;
        },

        async aprovarIC() {
            let res = await aprovarIC('300000001', this.propostaIc.id);
            console.log(res);

            this.$router.push("/coordenador/ic");
        },

        async rejeitarIC() {
            let res = await rejeitarIC('200000005', this.propostaIc.id);
            console.log(res);

            this.$router.push("/coordenador/ic");
        }
    },
    created() {
        this.getPropostaIc();
    },
    data() {
        return {
            propostaIc: null,
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

.buttons-container * {
    margin: 10px;
}

</style>