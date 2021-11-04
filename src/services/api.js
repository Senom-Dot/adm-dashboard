import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://attackz-api.herokuapp.com'
});