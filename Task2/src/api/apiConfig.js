import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.agify.io', //Release Base URL
  headers: {'Content-Type': 'application/json'},
});

export default http;
