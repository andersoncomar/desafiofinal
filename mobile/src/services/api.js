import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@pizzadonjuan:token');

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  headers.UserType = 'client';

  return { ...config, headers };
});

export default api;
