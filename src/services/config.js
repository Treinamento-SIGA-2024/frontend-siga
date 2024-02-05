export function config() {
  const token = localStorage.getItem('sessao')
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }
}

export const apiUrl = 'http://localhost:8080'
