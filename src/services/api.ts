import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.5:3333',
  // baseURL: 'http://localhost:3333',
  // baseURL: 'http://192.168.0.24:3333', // Via USB
  // baseURL: 'http://localhost:3333', - IOS
  // baseURL: 'http://10.0.2.2:3333', - Android Studio
  // baseURL: 'http://10.0.3.2:3333', - Genimotion
});

export default api;
