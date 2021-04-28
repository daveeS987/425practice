import axios from 'axios';
// const functions = require('firebase-functions');

// let testEnv = functions.config().reactbackend.url;
// console.log('🚀 ~ file: axios.js ~ line 5 ~ testEnv', testEnv);

// const instance = axios.create({
//   baseURL: `${process.env.REACT_APP_BACKEND}`,
// });

const instance = axios.create({
  baseURL: 'https://davee-tinder-clone-backend.herokuapp.com',
});

export default instance;
