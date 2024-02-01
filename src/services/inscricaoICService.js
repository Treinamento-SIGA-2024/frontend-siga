import axios from 'axios'

const api_url = 'http://localhost:8080/inscricoes'

export async function getAllInscricoes(alunoId) {
  const { data } = await axios.get(`${api_url}/IC/aluno/${alunoId}`)

  return data
}

export async function createInscricaoIC(icId, alunoId) {
  const { data } = await axios.post(`${api_url}/IC/${icId}/aluno/${alunoId}`)
  return data
}

export async function cancelarIncricaoIC(icId) {
  const { data } = await axios.put(`${api_url}/ic/cancelar/${icId}`)
  return data
}
