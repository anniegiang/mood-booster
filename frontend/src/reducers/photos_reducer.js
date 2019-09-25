import { RECEIVE_PHOTO } from "../actions/photo_action";

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  // debugger
  switch (action.type) {
    case RECEIVE_PHOTO:
      newState = Object.assign({}, state, {
        [action.photo.data._id]: action.photo.data
      });
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
