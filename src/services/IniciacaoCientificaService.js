import axios from 'axios';
const api_url = 'http://localhost:8080/iniciacao_cientifica';
export const createIniciacaoCientifica = async (params) => {
    const { data } = await axios.post(`${api_url}/200000001`, params);
    return data;
}
