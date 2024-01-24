import axios from 'axios';

const api_url = 'http://localhost:8080/inscricoes';

export async function getAllInscricoes(alunoId) {
  const { data } = await axios.get(`${api_url}/IC/aluno/${alunoId}`);

  return data;
}
