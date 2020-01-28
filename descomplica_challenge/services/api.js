const BASE_URL = 'https://swapi.co/api'
import axios from 'axios';

export const swapi = (sucess, error) => {
  const request = axios({
    method: 'GET',
    url: `${BASE_URL}/people`,
    headers: []
  });
  return request.then(
    response => sucess(response),
    err => error(err)
    );
};
