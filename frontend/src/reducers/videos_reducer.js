import {RECEIVE_VIDEO} from '../actions/video_action';

const VideosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_VIDEO:
            newState = Object.assign({},state, {[action.video.id]: action.video})
            return newState;
        default:
            return state
    }
}

export default VideosReducer;