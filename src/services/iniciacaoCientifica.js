import axios from 'axios';
import {config} from "@/services/config.js";
const api_url = 'http://localhost:8080';

export const getAllIcs = async () => {
    const { data } = await axios.get(`${api_url}/iniciacao_cientifica`);

    return data;
};

export async function getAllICsDisponiveis() {
    const response = await axios.get(`${api_url}/iniciacao_cientifica/aceitas`, config());
    console.log(response.data);
    return response.data;
  }

export const getIcById = async (icId) => {
    const { data } = await axios.get(`${api_url}/iniciacao_cientifica/${icId}`);
    console.log(data)
    return data;
};


