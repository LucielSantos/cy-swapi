import { api } from './api';

export const getPeoples = async (search, page) => {
  try {
    const response = await api.get(`/people?search=${search || ''}&page=${page || 1}`);

    return response;
  } catch (error) {
    return error;
  }
}