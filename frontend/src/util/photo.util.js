import axios from "axios";

export const getPhoto = id => {
  return axios.get(`/api/photos/${id}`);
};
