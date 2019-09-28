import * as APIUtil from "../util/photo.util";

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

//REGULAR ACTION CREATOR
const receivePhoto = photo => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

//THUNK ACTION CREATOR
export const fetchPhoto = id => dispatch => {
  return APIUtil.getPhoto(id).then(photo => dispatch(receivePhoto(photo)));
};

export const createPhotoComment = data => dispatch => {
  return APIUtil.createPhotoComment(data).then(photo =>
    dispatch(receivePhoto(photo))
  );
};
