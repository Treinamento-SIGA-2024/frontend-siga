import axios from "axios";
import {config} from "./config.js"


const api_url = "http://localhost:8080"
export const createAlunoPedidoEstagio = async (params) => {
    const { data } = await axios.post(`${api_url}/inscricoes/aluno/formulario`, params);
    console.log(data)
    return data;
}

export async function getInscricaoEstagio(){
    const { data } = await axios.get(`${api_url}/inscricoes/estagio/aluno/`,
      config())
    console.log(data)
    return data;
}

export async function cancelarPedidoEstagio(inscricao_id) {
    const { data } = await axios.put(`${api_url}/inscricoes/estagio/cancelar/${inscricao_id}`);
    console.log(data)
    return data;
}