// Aluno
import HomeAluno from '@/pages/aluno/Home.vue'
import ListICAluno from '@/pages/aluno/ListIC.vue'
import PageICAluno from '@/pages/aluno/PageIC.vue'
import PedidosAluno from '@/pages/aluno/Pedidos.vue'
import PageEstagioAluno from '@/pages/aluno/PageEstagio.vue'
import ListEstagioAluno from '@/pages/aluno/ListEstagio.vue'
import FormEstagioAluno from '@/pages/aluno/FormEstagio.vue'

// Coordenador
import HomeCoordenador from '@/pages/coordenador/Home.vue'
import ListEstagioCoordenador from '@/pages/coordenador/ListEstagio.vue'
import ListICPropostasCoordenador from '@/pages/coordenador/ListICPropostas.vue'
import SubmitEstagioCoordenador from '@/pages/coordenador/SubmitEstagio.vue'
import SubmitICCoordenador from '@/pages/coordenador/SubmitIC.vue'

// Professor
import HomeProfessor from '@/pages/professor/Home.vue'
import CadastroICProfessor from '@/pages/professor/CadastroIC.vue'
import ListICProfessor from '@/pages/professor/ListIC.vue'
import PageICProfessor from '@/pages/professor/PageIC.vue'
import PedidosProfessor from '@/pages/professor/Pedidos.vue'

// Secretaria
import HomeSecretaria from '@/pages/secretaria/Home.vue'
import CreateEstagioSecretaria from '@/pages/secretaria/CreateEstagio.vue'

// Not found
import NotFound from '@/pages/NotFound.vue'

import {createWebHistory, createRouter} from 'vue-router'


const routes = [
    // Aluno
    {path: '/aluno', name: 'Aluno', component: HomeAluno},
    {path: '/aluno/ic', name: 'ListICAluno', component: ListICAluno},
    {path: '/aluno/ic/pagina', name: 'PageICAluno', component: PageICAluno},
    {path: '/aluno/estagio', name: 'ListEstagioAluno', component: ListEstagioAluno},
    {path: '/aluno/estagio/pagina', name: 'PageEstagioAluno', component: PageEstagioAluno},
    {path: '/aluno/estagio/pagina/contrato', name: 'FormEstagioAluno', component: FormEstagioAluno},
    {path: '/aluno/pedidos', name: 'PedidosAluno', component: PedidosAluno},
    {path: '/aluno/pedidos/ic/pagina', name: 'PageICAluno', component: PageICAluno},
    {path: '/aluno/pedidos/estagio/pagina', name: 'PageEstagioAluno', component: PageEstagioAluno},

    // Professor
    {path: '/professor', name: 'HomeProfessor', component: HomeProfessor},
    {path: '/professor/ic', name: 'ListICProfessor', component: ListICProfessor},
    {path: '/professor/ic/pagina', name: 'PageICProfessor', component: PageICProfessor},
    {path: '/professor/pedidos', name: 'PedidosProfessor', component: PedidosProfessor},
    {path: '/professor/cadastroIC', name: 'CadastroICProfessor', component: CadastroICProfessor},

    // Coordenador
    {path: '/coordenador', name: 'HomeCoordenador', component: HomeCoordenador},
    {path: '/coordenador/ic', name: 'ListICPropostasCoordenador', component: ListICPropostasCoordenador},
    {path: '/coordenador/ic/submit', name: 'SubmitICCoordenador', component: SubmitICCoordenador},
    {path: '/coordenador/estagio', name: 'ListEstagioCoordenador', component: ListEstagioCoordenador},
    {path: '/coordenador/estagio/submit', name: 'SubmitEstagioCoordenador', component: SubmitEstagioCoordenador},

    // Secretaria
    {path: '/secretaria', name: 'HomeSecretaria', component: HomeSecretaria},
    {path: '/secretaria', name: 'CreateEstagioSecretaria', component: CreateEstagioSecretaria},

    // Not found
    {path: '/:pathMatch(.*)*', name: 'NotFound', redirect: "/notfound", component: NotFound},
    {path: '/notfound', name: 'NotFound2', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;