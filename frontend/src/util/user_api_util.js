const axios = require("axios");

export const fetchUser = id => {
  return axios.get(`/api/users/${id}`);
};

export const saveContent = data => {
  return axios.post(`/api/users/content/like`, data);
};

export const deleteContent = data => {
  return axios.delete('/api/users/content/delete', data)
}

