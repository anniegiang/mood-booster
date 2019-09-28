import axios from "axios";

export const getPhoto = id => {
  return axios.get(`/api/photos/${id}`);
};

export const createPhotoComment = data => {
  return axios.post(`/api/photos/comment`, data);
};

export const updatePhotoComment = data => {
  return axios.delete(`/api/photos/comment`, data);
};

export const deletePhotoComment = data => {
  return axios.delete(`/api/photos/comment`, data);
};
