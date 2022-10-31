

import { Axios } from 'axios';
import ApiResponse from '../models/ApiResponse';

const axios = new Axios({
    baseURL: 'http://localhost:5001',
    headers: { 'Content-Type': 'application/json' }
})

export const getGenderNationallity = async (name: string): Promise<ApiResponse> => {
    return await axios.post('/', JSON.stringify({ name }))
        .then(response => JSON.parse(response.data))
}
