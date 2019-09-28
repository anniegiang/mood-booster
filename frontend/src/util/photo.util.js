import axios from "axios";

export const getPhoto = id => {
  return axios.get(`/api/photos/${id}`);
};

export const getAllPhotoComments = photoId => {
  return axios.get(`/api/photos/${photoId}/comments`);
};
