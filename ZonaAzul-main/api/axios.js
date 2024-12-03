import axios from "axios";

export const apiConfig = axios.create({
    baseURL: 'http://192.168.1.7:4000',
    headers: {
      'Content-Type': 'application/json',
    },
});