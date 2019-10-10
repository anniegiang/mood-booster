import { connect } from "react-redux";
import Favorites from './favorites'
import { fetchPhoto } from "../../actions/photo_actions";
import { fetchQuote } from "../../actions/quote_actions";
import { fetchVideo } from "../../actions/video_actions";

const msp = (state) => {
    // debugger
    let photosArray = [];
    state.session.user.photoSave.forEach(photoId => {
        photosArray.push(state.content.photos[photoId])
    })

    let quotesArray = [];
    state.session.user.quoteSave.forEach(quoteId => {
        quotesArray.push(state.content.quotes[quoteId])
    })

    let videosArray = [];
    state.session.user.videoSave.forEach(videoId => {
        videosArray.push(state.content.videos[videoId])
    })
    
    return({
        user: state.user,
        photoSave: state.session.user.photoSave,
        quoteSave: state.session.user.quoteSave,
        videoSave: state.session.user.videoSave,
        photos: photosArray,
        quotes: quotesArray,
        videos: videosArray
    })
}

const mdp = dispatch => {
    return({
        fetchPhoto: id => dispatch(fetchPhoto(id)),
        fetchQuote: id => dispatch(fetchQuote(id)),
        fetchVideo: id => dispatch(fetchVideo(id)),
    
    })
}

export default connect(msp,mdp)(Favorites);