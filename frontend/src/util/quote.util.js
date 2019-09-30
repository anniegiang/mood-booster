import axios from "axios";

export const getQuote = id => {
    return axios.get(`/api/quotes/${id}`)
}

export const getQuotes = query => {
    return axios.get(`/api/quotes${query}`)
}

export const createQuoteComment = data => {
  return axios.post(`/api/quotes/comment`, data);
};

export const updateQuoteComment = data => {
  return axios.put(`/api/quotes/comment`, data);
};

export const deleteQuoteComment = data => {
  return axios.delete(
    `/api/quotes/comment?quoteId=${data.quoteId}&commentId=${data.commentId}`,
    data
  );
};

