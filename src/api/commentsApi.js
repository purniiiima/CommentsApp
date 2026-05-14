import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchComments = async (page = 1, limit = 10) => {
  const response = await axios.get(
    `${BASE_URL}/comments?_page=${page}&_limit=${limit}`,
  );

  return response.data;
};