import Login from "@/pages/Login.vue";

// Aluno
import HomeAluno from '@/pages/aluno/Home.vue';
import ListICAluno from '@/pages/aluno/ListIC.vue';
import PageICAluno from '@/pages/aluno/PageIC.vue';
import PedidosAluno from '@/pages/aluno/Pedidos.vue';
import PageEstagioAluno from '@/pages/aluno/PageEstagio.vue';
import ListEstagioAluno from '@/pages/aluno/ListEstagio.vue';
import FormEstagioAluno from '@/pages/aluno/FormEstagio.vue';

// Coordenador
import HomeCoordenador from '@/pages/coordenador/Home.vue';
import ListEstagioCoordenador from '@/pages/coordenador/ListEstagio.vue';
import ListICPropostasCoordenador from '@/pages/coordenador/ListICPropostas.vue';
import SubmitEstagioCoordenador from '@/pages/coordenador/SubmitEstagio.vue';
import SubmitICCoordenador from '@/pages/coordenador/SubmitIC.vue';

// Professor
import HomeProfessor from '@/pages/professor/Home.vue';
import CadastroICProfessor from '@/pages/professor/CadastroIC.vue';
import ListICProfessor from '@/pages/professor/ListIC.vue';
import PageICProfessor from '@/pages/professor/PageIC.vue';
import PedidosProfessor from '@/pages/professor/Pedidos.vue';
import SolicitacaoIC from '@/pages/professor/SolicitacaoIC.vue';

// Secretaria
import HomeSecretaria from '@/pages/secretaria/Home.vue';
import CreateEstagioSecretaria from '@/pages/secretaria/CreateEstagio.vue';

// Not found
import NotFound from '@/pages/NotFound.vue';

import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },

  // Aluno
  {
    path: "/aluno",
    name: "Aluno",
    component: HomeAluno
  },
  {
    path: "/aluno/ic",
    name: "ListICAluno",
    component: ListICAluno
  },
  {
    path: "/aluno/ic/id/:icId",
    name: "PageICAluno",
    component: PageICAluno
  },
  {
    path: "/aluno/estagio",
    name: "ListEstagioAluno",
    component: ListEstagioAluno,
  },
  {
    path: "/aluno/estagio/id/:id",
    name: "PageEstagioAluno",
    component: PageEstagioAluno,
    props: true,
  },
  {
    path: "/aluno/estagio/pagina/contrato",
    name: "FormEstagioAluno",
    component: FormEstagioAluno,
  },
  {
    path: "/aluno/pedidos",
    name: "PedidosAluno",
    component: PedidosAluno
  },
  {
    path: "/aluno/pedidos/estagio/pagina",
    name: "PedidosEstagioAluno",
    component: PageEstagioAluno,
  },
  // Professor
  { path: "/professor", name: "HomeProfessor", component: HomeProfessor },
  {
    path: "/professor/ic",
    name: "ListICProfessor",
    component: ListICProfessor,
  },
  {
    path: "/professor/ic/pagina",
    name: "PageICProfessor",
    component: PageICProfessor,
  },
  {
    path: "/professor/pedidos",
    name: "PedidosProfessor",
    component: PedidosProfessor,
  },
  {
    path: "/professor/cadastroIC",
    name: "CadastroICProfessor",
    component: CadastroICProfessor,
  },
  {
    path: '/professor/ic/pagina/solicitacoes',
    name: 'PageICProfessorSolicitacoes',
    component: SolicitacaoIC
  },

  // Coordenador
  { path: "/coordenador", name: "HomeCoordenador", component: HomeCoordenador },
  {
    path: "/coordenador/ic",
    name: "ListICPropostasCoordenador",
    component: ListICPropostasCoordenador,
  },
  {
    path: "/coordenador/ic/submit",
    name: "SubmitICCoordenador",
    component: SubmitICCoordenador,
  },
  {
    path: "/coordenador/estagio",
    name: "ListEstagioCoordenador",
    component: ListEstagioCoordenador,
  },
  {
    path: "/coordenador/estagio/:estagioId",
    name: "SubmitEstagioCoordenador",
    component: SubmitEstagioCoordenador,
    props: true,
  },

  // Secretaria
  { path: "/secretaria", name: "HomeSecretaria", component: HomeSecretaria },
  {
    path: "/secretaria/estagio",
    name: "CreateEstagioSecretaria",
    component: CreateEstagioSecretaria,
  },

  // Not found
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    redirect: "/notfound",
    component: NotFound,
  },
  { path: "/notfound", name: "NotFound2", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {top : 0};
  }
});

export default router;

