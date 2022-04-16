import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://optimals.athfemoiur.com/',
    timeout: 5000,
});

