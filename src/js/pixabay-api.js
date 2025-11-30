import axios from 'axios';

const API_KEY = '53479678-bd84db524e397b690847497a1';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log('Pixabay data:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('HTTP error:', error);
      throw error;
    });
}
