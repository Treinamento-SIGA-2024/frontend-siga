const token = localStorage.getItem("sessao");

export const config = {
	headers: {
		"Content-Type": "application/json",
		"Authorization": token,
	},
};

export const apiUrl = "http://localhost:8080";
