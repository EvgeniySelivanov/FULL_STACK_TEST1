import axios from 'axios';
import qs from 'query-string';
import FormData from 'form-data';
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



export const getUser = (idUser) => httpClient.get(`/users/${idUser}`);
export const deleteUser = (idUser) => httpClient.delete(`/users/${idUser}`);
export const updateUser = (values,idUser) => {
  console.log('api',values);
  console.log('api',idUser);
  httpClient.patch(`/users/update/${values.id}`,values);

  // httpClient.patch(`/users/update/${idUser}`,values);

}
export const postUser = (values) => httpClient.post('/users', values);


export const postGroups = (values) => 
{
  const formDataValues=new FormData();
  formDataValues.append('name',values.name);
  formDataValues.append('userId',values.userId);
  formDataValues.append('image',values.image);
 return httpClient.post('/groups', formDataValues,{headers:{'Content-Type':'multipart/form-data'}});
};
