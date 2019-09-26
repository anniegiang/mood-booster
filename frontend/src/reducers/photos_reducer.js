import { RECEIVE_PHOTO } from "../actions/photo_actions";

const PhotosReducer = (state = {}, action) => {
<<<<<<< HEAD
  Object.freeze(state);
  let newState;
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
=======
    Object.freeze(state);
    let newState;
    // debugger
    switch (action.type) {
        case RECEIVE_PHOTO:
            newState = Object.assign({}, state, { [action.photo.data._id]: action.photo.data })
            return newState;
        default:
            return state
    }
}
>>>>>>> master

export default PhotosReducer;
