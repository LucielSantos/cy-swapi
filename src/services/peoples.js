import { api } from './api';

export const getPeoples = async (search, page) => {
  try {
    const response = await api.get('/people?search=qualquercoisa');

    return response;
  } catch (error) {
    return error;
  }
}