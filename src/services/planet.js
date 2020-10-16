import { api } from './api';

export const getPlanets = async (page) => {
  try {
    const response = await api.get(`/planets?page=${page || 1}`);

    return response;
  } catch (error) {
    return error;
  }
}

export const getPlanetDetails = async (id) => {
  try {
    const response = await api.get(`/planets/${id}`);

    return response;
  } catch (error) {
    return error;
  }
}