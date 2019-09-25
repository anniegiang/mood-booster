const axios = require("axios");

export const fetchUser = id => {
  return axios.get(`/api/users/${id}`);
};

export const likeContent = data => {
  return axios.post(`/api/users/content/like`, data);
};
