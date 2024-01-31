import axios from 'axios';
const api_url = 'http://localhost:8080/iniciacao_cientifica';
export const createIniciacaoCientifica = async (params) => {
    const { data } = await axios.post(`${api_url}/200000001`, params);
    return data;
}

export async function getIcAtivos (icId) {
    const response = await axios.get(`${api_url}/${icId}/ativos`)
    return response.data;
}

export async function addProfessorToIc(icId, professor) {
    const response = await axios.put(`${api_url}/${icId}/vincular`, professor);
    return response.data;
}