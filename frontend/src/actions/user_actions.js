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
export const saveContent = data => dispatch => {
  return APIUtil.saveContent(data).then(user => dispatch(receiveUser(user)));
};

export const fetchUser = id => dispatch => {
  return APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
}
