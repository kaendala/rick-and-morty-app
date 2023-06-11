import axios from 'axios';
import { API_URL } from '../constants/env';

const getAll = async (page: number = 1, name?: string) => {
  const response = await axios
    .get(`${API_URL}/character?page=${page}${name && `&name=${name}`}`)
    .then((response) => response.data);
  return response;
};

export const RickAndMortyService = {
  getAll,
};
