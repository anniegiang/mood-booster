import axios from "axios";

export const getQuote = id => {
    return axios.get(`/api/quotes/${id}`)
}

export const createQuoteComment = data => {
  return axios.post(`/api/quotes/comment`, data);
};

export const updateQuoteComment = data => {
  return axios.delete(`/api/quotes/comment`, data);
};

export const deleteQuoteComment = data => {
  return axios.delete(
    `/api/quotes/comment?quoteId=${data.quoteId}&commentId=${data.commentId}`,
    data
  );
};
