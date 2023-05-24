import axios from "axios";

const BASE_URL = 'https://api.coingecko.com/api/v3'

export const ping = async () => {
     return await axios.get(`${BASE_URL}/ping`)
}

export const getMarketData = async () => {
    return await axios.get(`${BASE_URL}/coins/markets?vs_currency=sek&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=sv`)
}
