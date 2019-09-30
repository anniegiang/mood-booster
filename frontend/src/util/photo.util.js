import axios from "axios";

export const getPhoto = id => {
<<<<<<< HEAD
  return axios.get(`/api/photos/${id}`);
};
=======
    return axios.get(`/api/photos/${id}`)
}

export const getPhotos = query => {
    return axios.get(`/api/photos${query}`)
}
>>>>>>> 62210313862ca9cc703b32dc9a4ebd1c2c3ec3e9
