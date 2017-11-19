import axios from 'axios'

const localAPI = axios.create({
  baseURL: 'http://localhost:3000'
});

const imgurAPI = axios.create({
  baseURL: 'https://api.imgur.com/3/image',
  headers: {'Authorization': 'Client-ID a05e8b1a7d26c2d'}
});
export {localAPI, imgurAPI}

