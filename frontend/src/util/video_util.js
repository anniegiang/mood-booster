import axios from "axios";

export const getVideo = id => {
<<<<<<< HEAD
  return axios.get(`/api/videos/${id}`);
};

export const createVideoComment = data => {
  return axios.post(`/api/videos/comment`, data);
};

export const updateVideoComment = data => {
  return axios.delete(`/api/videos/comment`, data);
};

export const deleteVideoComment = data => {
  return axios.delete(
    `/api/videos/comment?videoId=${data.videoId}&commentId=${data.commentId}`,
    data
  );
};
=======
    return axios.get(`/api/videos/${id}`)
}

export const getVideos = query => {
    return axios.get(`/api/videos${query}`)
}
>>>>>>> 62210313862ca9cc703b32dc9a4ebd1c2c3ec3e9
