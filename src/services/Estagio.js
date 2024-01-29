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

export const getEmpresas = (estagios) => {
    let empresas = [];
    for(let estagio of estagios) {
        if (!empresas.includes(estagio.empresa)) {
            empresas.push(estagio.empresa);
        }
    }

    return empresas;
}

export const getCargos = (estagios) => {
    let cargos = [];
    for(let estagio of estagios) {
        if (!cargos.includes(estagio.cargh)) {
            cargos.push(estagio.cargo);
        }
    }

    return cargos;
}

export const getModalidades = (estagios) => {
    let modalidades = [];
    for(let estagio of estagios) {
        if (!modalidades.includes(estagio.modalidade)) {
            modalidades.push(estagio.modalidade);
        }
    }

    return modalidades;
}