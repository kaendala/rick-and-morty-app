import axios from 'axios';
import { API_URL } from '../constants/env';

const getAll = async (page: number = 1) => {
  const response = await axios
    .get(`${API_URL}/character?page=${page}`)
    .then((response) => response.data);
  return response;
};

const filter = async (name: string) =>
  await axios
    .get(`${API_URL}/character?name=${name}`)
    .then((response) => response.data);

export const RickAndMortyService = {
  getAll,
  filter,
};
