import axios from "axios";

export const getQuote = id => {
    return axios.get(`/api/quotes/${id}`)
}

<<<<<<< HEAD
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
=======
export const getQuotes = query => {
    return axios.get(`/api/quotes${query}`)
}
>>>>>>> 62210313862ca9cc703b32dc9a4ebd1c2c3ec3e9
