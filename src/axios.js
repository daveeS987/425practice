import axios from 'axios';
// const functions = require('firebase-functions');

// let testEnv = functions.config().reactbackend.url;
// console.log('🚀 ~ file: axios.js ~ line 5 ~ testEnv', testEnv);

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND}`,
});

export default instance;
