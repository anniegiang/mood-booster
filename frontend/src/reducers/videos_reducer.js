import {RECEIVE_VIDEO, RECEIVE_FILTERED_VIDEOS} from '../actions/video_action';

const VideosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_VIDEO:
            newState = Object.assign({},state, {[action.video.data._id]: action.video.data})
            return newState;
        case RECEIVE_FILTERED_VIDEOS:
            return action.videos
        default:
            return state
    }
}

export default VideosReducer;