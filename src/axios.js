import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-amazon123456.cloudfunctions.net/api',
  // 'http://localhost:5001/amazon123456/us-central1/api',
});

export default instance;
