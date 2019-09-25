import * as APIUtil from "../util/user_api_util";
export const RECEIVE_USER = "RECEIVE_USER";
export const LIKE_CONTENT = "LIKE_CONTENT";

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

// thunk
export const likeContent = (contentType, contentId, userId) => dispatch => {
  const data = {
    contentType: contentType,
    contentId: contentId,
    userId: userId
  };
  return APIUtil.likeContent(data).then(user => dispatch(receiveUser(user)));
};
