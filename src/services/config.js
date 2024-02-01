const Authorization = localStorage.getItem("sessao");

export const config = {
	headers: {
		"Content-Type": "application/json",
		Authorization,
	},
};

export const apiUrl = "http://localhost:8080";
