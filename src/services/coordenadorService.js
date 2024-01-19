import axios from "axios";

const url = "http://localhost:8080"

export async function getEstagiosPendentes(){
    const response = await axios.get(url + "/inscricoes/estagio");
    console.log(response.data);
    return response.data;
}

