import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.109:3334',
});

export default api;
