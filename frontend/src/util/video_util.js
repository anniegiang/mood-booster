import axios from "axios";

export const getVideo = id => {
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
