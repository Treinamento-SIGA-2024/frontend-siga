<template>
  <v-container>
    <v-card flat="true">
      <v-card-title>
        <div class="title">Pedidos</div>
      </v-card-title>
    </v-card>
  </v-container>
  <div class="d-flex align-center flex-column">
    <v-btn max-width="200" color="#C1DEBE" class="registerBtn">
      <!-- <svg-icon type="mdi" :path="path"/>  -->
      Cadastrar IC
    </v-btn>
  </div>

  <div
    class="d-flex align-center flex-column"
    v-for="(pedidos, i) in pedidos"
    :key="i"
  >
    <v-btn width="310" height="80" color="#CFEEDC" style="margin-bottom: 29px;">
      <div class="pedidosBtn">
        <span> {{ pedidos.titulo }} </span>
        <span> {{ pedidos.professor }} </span>
      </div>
      <div class="status">
        <svg-icon color="#27AE60" type="mdi" :path="path" />
      </div>
    </v-btn>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPlusCircleOutline } from "@mdi/js";
import { mdiCircle } from "@mdi/js";

export default {
  name: "my-cool-component",

  components: {
    SvgIcon,
  },

  data() {
    return {
      pedidos: [
        {
          professor: "Fulano",
          titulo: "Como criar mapas com CSS",
          descricao: "Pendente",
        },
        {
          professor: "Ciclano",
          titulo: "Jogos para crianças",
          descricao: "Pendente",
        },
        {
          professor: "Anna Banana",
          titulo: "C++ para Universitários",
          descricao: "Pendente",
        },
        {
          professor: "Fulano",
          titulo: "Como criar mapas com CSS",
          descricao: "Pendente",
        },
        {
          professor: "Fulano",
          titulo: "Como criar mapas com CSS",
          descricao: "Pendente",
        },
        {
          professor: "Fulano",
          titulo: "Como criar mapas com CSS",
          descricao: "Pendente",
        },
      ],
      path: mdiPlusCircleOutline,
      path: mdiCircle,
      pedidoData: {
        professor: "",
        titulo: "",
        descricao: "",
      },
      props: {
        pedidos: {
          type: Object,
          required: true,
        },
      },
      methods: {},
    };
  },
};
</script>

<style scoped>
.title {
  color: #282828;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-family: Source Sans Pro; */
  color: #666666;
}
.registerBtn {
  margin-bottom: 5vh;
}
.pedidosBtn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 260px;
  height: 75px;
  padding-left: 5px;
}
.status {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1.5vh;
  width: 20px;
  height: 75px;
}
</style>
