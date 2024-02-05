import axios from 'axios'

const url = 'http://localhost:8080'
import { config } from './config'

export async function getAllProfessores() {
  const response = await axios.get(`${url}/professor`)
  return response.data
}

export async function getAllIcPendentes(matricula, icId) {
  const { data } = await axios.get(`${url}/inscricoes/ic/${matricula}/${icId}`)
  return data
}

export async function putSituacaoInscricaoIcAluno(pedidoId, body) {
  const { data } = await axios.put(`${url}/inscricoes/ic/${pedidoId}`, body)
  return data
}

export async function getPedidos(matricula) {
  const response = await axios.get(
    `${url}/professor/${matricula}/iniciacoes_cientificas`,
  )
  return response.data
}

export async function createIniciacaoCientifica(params, matricula) {
  const { data } = await axios.post(
    `${url}/iniciacao_cientifica/${matricula}`,
    params,
  )
  return data
}

export async function deletarAlunoIC(inscricaoId) {
  await axios.put(
    `${url}/inscricoes/ic/expulsar/id/${inscricaoId}`,
    {}, config());
}
export async function getAllRequerimentosIc() {
  const response = await axios.get(`${url}/inscricoes/ic`, config())
  return response.data
}
