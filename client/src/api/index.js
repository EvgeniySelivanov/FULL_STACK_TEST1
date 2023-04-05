import axios from 'axios';
const httpClient= axios.create({
  baseURL:'http://localhost:3000/api',
})
export const getAllUsers=({limit,offset})=>httpClient.get('/users?limit=10&offset=299');
export const postUser=(values)=>httpClient.post('/users',values);