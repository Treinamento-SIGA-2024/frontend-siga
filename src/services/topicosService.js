import axios from 'axios';
const api_url = 'http://localhost:8080/topicos';

export const getTopicos = async () => {
    const { data } = await axios.get(`${api_url}`);
    return data;
};