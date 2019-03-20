import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

api.interceptors.response.use(
  response => {
    return response
  },
  err => {
    const { data, ...otherValues } = err.response
    const error = {
      ...otherValues,
      ...data
    }
    return Promise.reject(error)
  }
)

export default function callApi(method, url, data) {
  return api({
    method,
    url,
    data
  })
    .then(response => response.data)
    .catch(err => {
      return {
        error: true,
        message: err.error ? err.error.message : err.message
      }
    })
}
