import { RECEIVE_PHOTO, RECEIVE_FILTERED_PHOTOS } from '../actions/photo_action';

const PhotosReducer = (state = {}, action) => {
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

export default PhotosReducer;
