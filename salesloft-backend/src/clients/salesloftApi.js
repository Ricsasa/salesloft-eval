const axios = require('axios').default;
const BASE_URL = require('../config').BASE_URL;

exports.client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`
  },
});
