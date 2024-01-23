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
