import axios from "axios";
import { apiUrl, config } from "./config";

const route = `${apiUrl}/sessao`;

export async function createSessao(requestBody) {
	const response = await axios.post(route, requestBody, config);

	return response.data;
}
export async function getUserBySessao(sessao) {
	const response = await axios
		.get(`${route}/id/${sessao}`, config)
		.catch((e) => {
			return { data: null };
		});

	return response.data;
}
export async function getUsuario() {
	const sessao = localStorage.getItem("sessao");
	if (sessao === null) return null;
	return await getUserBySessao(sessao);
}
