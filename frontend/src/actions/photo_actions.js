import * as APIUtil from "../util/photo.util";

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_FILTERED_PHOTOS = "RECEIVE_FILTERED_PHOTOS"

//REGULAR ACTION CREATOR
export const receivePhoto = photo => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

const receivePhotos = photos => {
    return {
        type: RECEIVE_FILTERED_PHOTOS,
        photos
    }
}

//THUNK ACTION CREATOR
export const fetchPhoto = id => dispatch => {
    return APIUtil.getPhoto(id).then(photo => dispatch(receivePhoto(photo)))
}

export const fetchPhotos = query => dispatch => {
    return APIUtil.getPhotos(query).then(photos => dispatch(receivePhotos(photos)))
}
