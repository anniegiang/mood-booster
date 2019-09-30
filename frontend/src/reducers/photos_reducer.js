import { RECEIVE_PHOTO, RECEIVE_FILTERED_PHOTOS } from '../actions/photo_actions';

const PhotosReducer = (state = {}, action) => {
<<<<<<< HEAD
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
=======
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PHOTO:
            newState = Object.assign({}, state, { [action.photo.data._id]: action.photo.data })
            return newState;
        case RECEIVE_FILTERED_PHOTOS:
            return action.photos
        default:
            return state
    }
}
>>>>>>> 62210313862ca9cc703b32dc9a4ebd1c2c3ec3e9

export default PhotosReducer;
