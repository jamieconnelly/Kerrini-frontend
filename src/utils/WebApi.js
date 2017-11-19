
const jsonOrError = (response) => {
  if (!response.ok) {
    throw new Error(`The server returned an error. Status code: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

const postJSON = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(jsonOrError)
}

const signUp = (values) => (
  postJSON('/auth/signup', values)
)

export default {
  signUp,
}