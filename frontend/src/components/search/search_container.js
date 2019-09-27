import Search from './search'
import { connect } from "react-redux";
import { fetchVideos } from '../../actions/video_action';
const msp = (state,ownProps) => {
    return({
        videos: state.content.videos.data
    })
}

const mdp = dispatch => {
    return({
        fetchVideos: (query) => dispatch(fetchVideos(query))
    })
}

export default connect(msp,mdp)(Search)