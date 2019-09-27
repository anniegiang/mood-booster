import axios from "axios";

export const getQuote = id => {
    return axios.get(`/api/quotes/${id}`)
}

export const getQuotes = query => {
    return axios.get(`/api/quotes${query}`)
}