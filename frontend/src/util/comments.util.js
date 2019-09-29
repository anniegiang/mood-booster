import axios from "axios";

export const createComment = data => {
  debugger;
  return axios.post(`/api/${data.type}s/comment`, data);
};

export const updateComment = data => {
  return axios.delete(`/api/${data.type}s/comment`, data);
};

export const deleteComment = data => {
  return axios.delete(
    `/api/${data.type}s/comment?photoId=${data.photoId}&commentId=${data.commentId}`,
    data
  );
};
