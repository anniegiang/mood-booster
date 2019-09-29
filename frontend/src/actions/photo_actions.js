import * as APIUtil from "../util/photo.util";

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

//REGULAR ACTION CREATOR
export const receivePhoto = photo => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

//THUNK ACTION CREATOR
export const fetchPhoto = id => dispatch => {
  return APIUtil.getPhoto(id).then(photo => dispatch(receivePhoto(photo)));
};
