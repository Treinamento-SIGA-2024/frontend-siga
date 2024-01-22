import axios from "axios";

const url = "http://localhost:8080";

export async function getAllIcPendentes(matricula, icId){
    const { data } = await axios.get(`${url}/inscricao/ic/${matricula}/${icId}`);
    return data;
}
