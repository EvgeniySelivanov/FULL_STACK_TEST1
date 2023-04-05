import axios from 'axios';
import qs from 'query-string';
import CONSTANTS from '../constants';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const getAllGroups = (options = {}) => {
  const defaultOption = {
    limit: CONSTANTS.MIN_LIMIT,
    offset: 0
  }
  const readyOptions = {
    ...defaultOption,
    ...options,
  }
  return httpClient.get(`/groups?${qs.stringify(readyOptions)}`);
} 

export const getAllTasks = (options = {}) => {
  const defaultOption = {
    limit: CONSTANTS.MIN_LIMIT,
    offset: 0
  }
  const readyOptions = {
    ...defaultOption,
    ...options,
  }
  return httpClient.get(`/tasks?${qs.stringify(readyOptions)}`);
} 

export const getAllUsers = (options = {}) => {
  const defaultOption = {
    limit: CONSTANTS.MIN_LIMIT,
    offset: 300
  }
  const readyOptions = {
    ...defaultOption,
    ...options,
  }
  return httpClient.get(`/users?${qs.stringify(readyOptions)}`);
}
export const postUser = (values) => httpClient.post('/users', values);