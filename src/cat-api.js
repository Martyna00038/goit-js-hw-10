import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_IaEOuD79MC6moAUuj9WWDDaQU2DsmJ5wC9S3jnXdnvmt7t4SHbGtNTZb5cnsP71u';

export const fetchBreeds = () => {
  return axios.get('https://api.thecatapi.com/v1/breeds');
};

export const fetchCatByBreed = breedId => {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
};
