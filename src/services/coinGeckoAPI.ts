import axios from "axios";

const BASE_URL = 'https://api.coingecko.com/api/v3'

export const ping = async () => {
    const res = await axios.get(`${BASE_URL}/ping`)
    return res
}
