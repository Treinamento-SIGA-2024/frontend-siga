import axios from 'axios';
const api_url = 'http://localhost:8080/estagio';

export const getAllEstagios = async () => {
    const { data } = await axios.get(`${api_url}`);

    return data;
};

