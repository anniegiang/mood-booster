import axios from "axios";

export const createComment = data => {
  return axios.post(`/api/${data.type}s/comment`, data);
};

export const updateComment = data => {
  return axios.delete(`/api/${data.type}s/comment`, data);
};

export const deleteComment = data => {
  return axios.delete(
    `/api/${data.type}s/comment?contentId=${data.contentId}&commentId=${data.commentId}`,
    data
  );
};
