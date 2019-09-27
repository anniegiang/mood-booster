import Search from './search'
import { connect } from "react-redux";
import { fetchVideos } from '../../actions/video_action';
import { fetchPhotos } from '../../actions/photo_action';
import { fetchQuotes } from '../../actions/quote_action';

const msp = (state,ownProps) => {
    return({
        videos: state.content.videos.data,
        photos: state.content.photos.data,
        quotes: state.content.quotes.data
    })
}

const mdp = dispatch => {
    return({
        fetchVideos: (query) => dispatch(fetchVideos(query)),
        fetchPhotos: (query) => dispatch(fetchPhotos(query)),
        fetchQuotes: (query) => dispatch(fetchQuotes(query))
    })
}

export default connect(msp,mdp)(Search)