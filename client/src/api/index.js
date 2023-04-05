import axios from 'axios';
import qs from 'query-string';
const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
})
export const getAllUsers = (options = {}) => {
  const defaultOption = {
    limit: 5,
    offset: 0
  }
  const readyOptions = {
    ...defaultOption,
    ...options,
  }
  return httpClient.get(`/users?${qs.stringify(readyOptions)}`);
}
export const postUser = (values) => httpClient.post('/users', values);