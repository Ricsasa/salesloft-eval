const axios = require('axios').default;
const BASE_URL = require('../config').BASE_URL;

class APIClient {
  constructor(){
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`
      },
    });
  }
  
  getQuery({perPage, page}) {
    return this.client.get(`people?per_page=${perPage}&page=${page}&include_paging_counts=true`);
  }
}

module.exports = APIClient;