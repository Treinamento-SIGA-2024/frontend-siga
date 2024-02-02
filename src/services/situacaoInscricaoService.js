import axios from 'axios';
const api_url = 'http://localhost:8080/situacao_inscricao';

export const getAllSituacoes = async () => {
    const { data } = await axios.get(`${api_url}`);
    return data;
};