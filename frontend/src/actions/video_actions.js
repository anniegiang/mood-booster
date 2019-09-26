import * as APIUtil from "../util/video_util";

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

//REGULAR ACTION CREATOR
const receiveVideo = video => {
    return{
        type: RECEIVE_VIDEO,
        video
    }
}

//THUNK ACTION CREATOR
export const fetchVideo = id =>  dispatch => {
    return APIUtil.getVideo(id).then(video => dispatch(receiveVideo(video)))
}



