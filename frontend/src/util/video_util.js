import axios from "axios";

export const getVideo = id => {
    return axios.get(`/api/videos/${id}`)
}

export const getVideos = query => {
    return axios.get(`/api/videos${query}`)
}