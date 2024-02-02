import axios from 'axios';

const api_url = 'http://localhost:8080/topicos';

export const getTopicos = async () => {
    const { data } = await axios.get(`${api_url}`);
    return data;
};

export async function createTopico(nome) {
    const { data } = await axios.post(`${api_url}`, {nome});

    return data;
}

export async function updateTopicoById(nome,id) {
    const { data } = await axios.put(`${api_url}/${id}`, {nome});
    console.log(data)
    return data;
}

export async function deleteTopicoById(id) {
    const { data } = await axios.delete(`${api_url}/${id}`);

    return data;
}