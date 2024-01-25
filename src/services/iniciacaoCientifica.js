import axios from 'axios';
const api_url = 'http://localhost:8080';

export const getAllIcs = async () => {
    const { data } = await axios.get(`${api_url}/iniciacao_cientifica`);

    return data;
};

export const getIcById = async (icId) => {
    const { data } = await axios.get(`${api_url}/iniciacao_cientifica/${icId}`);

    return data;
};
