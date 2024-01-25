import axios from "axios";

const url = "http://localhost:8080";

export async function getAllIcPendentes(matricula, icId){
    const { data } = await axios.get(`${url}/inscricao/ic/${matricula}/${icId}`);
    return data;
}

export async function putSituacaoInscricaoIcAluno(pedidoId,body){
    const {data} = await  axios.put(`${url}/inscricao/ic/${pedidoId}`, body);
    return data
}
import axios from "axios";

const url = "http://localhost:8080"

export async function getPedidos(matricula){
    const response = await axios.get(`${url}/professor/${matricula}/iniciacoes_cientificas`);
    return response.data;
}

export async function createIniciacaoCientifica(params, matricula){
    const { data } = await axios.post(`${url}/iniciacao_cientifica/${matricula}`, params);
    return data;
}
