import * as APIUtil from "../util/video_util";

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_FILTERED_VIDEOS = "RECEIVE_FILTERED_VIDEOS"

//REGULAR ACTION CREATOR
export const receiveVideo = video => {
    return{
        type: RECEIVE_VIDEO,
        video
    }
}

const receiveVideos = videos => {
    return {
        type: RECEIVE_FILTERED_VIDEOS,
        videos
    }
}

//THUNK ACTION CREATOR
export const fetchVideo = id =>  dispatch => {
    return APIUtil.getVideo(id).then(video => dispatch(receiveVideo(video)))
}

export const fetchVideos = query => dispatch => {
    return APIUtil.getVideos(query).then(videos => dispatch(receiveVideos(videos)))
}



