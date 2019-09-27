import axios from "axios";

export const getPhoto = id => {
    return axios.get(`/api/photos/${id}`)
}

export const getPhotos = query => {
    return axios.get(`/api/photos${query}`)
}