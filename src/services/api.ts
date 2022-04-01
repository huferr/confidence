import axios from "axios";

export const api = axios.create({
    baseURL: 'https://6246bd8e739ac8459191f7d5.mockapi.io/v2',
})