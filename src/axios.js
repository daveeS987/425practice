import axios from 'axios';

let testing = process.env.REACT_APP_BACKEND;
console.log('🚀 ~ file: axios.js ~ line 4 ~ testing', testing);

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND}`,
});

export default instance;
