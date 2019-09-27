import Search from './search'
import { connect } from "react-redux";
import { fetchVideos } from '../../actions/video_action';
import { fetchPhotos } from '../../actions/photo_action'
const msp = (state,ownProps) => {
    return({
        videos: state.content.videos.data,
        photos: state.content.photos.data
    })
}

const mdp = dispatch => {
    return({
        fetchVideos: (query) => dispatch(fetchVideos(query)),
        fetchPhotos: (query) => dispatch(fetchPhotos(query))
    })
}

export default connect(msp,mdp)(Search)