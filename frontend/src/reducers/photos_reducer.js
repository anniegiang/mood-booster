import { RECEIVE_PHOTO } from '../actions/photo_action';

const PhotosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PHOTO:
            newState = Object.assign({}, state, { [action.photo.id]: action.photo })
            return newState;
        default:
            return state
    }
}

export default PhotosReducer;