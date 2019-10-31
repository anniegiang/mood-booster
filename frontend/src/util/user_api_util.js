const axios = require("axios");

export const fetchUser = id => {
  return axios.get(`/api/users/${id}`);
};

export const saveContent = data => {
  return axios.post(`/api/users/content/like`, data);
};

export const deleteContent = data => {
  return axios.delete(
    `/api/users/content/delete?contentType=${data.contentType}&contentId=${data.contentId}&userId=${data.userId}`,
    data
  );
  // `/api/users/content/delete?contentType=${data.contentType}&contentId=${data.contentId}&userId=${data.userId}`
};
