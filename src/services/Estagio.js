import axios from 'axios';
const api_url = 'http://localhost:8080/estagio';

export const getAllEstagios = async () => {
    const { data } = await axios.get(`${api_url}`);

    return data;
};

export const getEstagioById = async (id) => {
    const { data } = await axios.get(`${api_url}/id/${id}`);

    return data;
}


export const createEstagio = async (params) => {
    const { data } = await axios.post(`${api_url}`, params);

    return data;
}
