import axios from "axios";
const api_url = "http://localhost:8080"
export const createAlunoPedidoEstagio = async (params) => {
    const { data } = await axios.post(`${api_url}/inscricoes/aluno/formulario`, params);
    console.log(data)
    return data;
}

export async function getInscricaoEstagio(aluno_id){
    const { data } = await axios.get(`${api_url}/inscricoes/estagio/aluno/${aluno_id}`)
    console.log(data)
    return data;
}