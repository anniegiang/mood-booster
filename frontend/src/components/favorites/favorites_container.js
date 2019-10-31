import { connect } from "react-redux";
import Favorites from "./favorites";
import { fetchPhoto } from "../../actions/photo_actions";
import { fetchQuote } from "../../actions/quote_actions";
import { fetchVideo } from "../../actions/video_actions";
import { fetchUser } from "../../actions/user_actions";

const msp = state => {
  let photosArray = [];
  state.user.photoSave.forEach(photoId => {
    photosArray.push(state.content.photos[photoId]);
  });

  let quotesArray = [];
  state.user.quoteSave.forEach(quoteId => {
    quotesArray.push(state.content.quotes[quoteId]);
  });

  let videosArray = [];
  state.user.videoSave.forEach(videoId => {
    videosArray.push(state.content.videos[videoId]);
  });

  return {
    user: state.session.user,
    photoSave: state.user.photoSave,
    quoteSave: state.user.quoteSave,
    videoSave: state.user.videoSave,
    photos: photosArray,
    quotes: quotesArray,
    videos: videosArray
  };
};

const mdp = dispatch => {
  return {
    fetchPhoto: id => dispatch(fetchPhoto(id)),
    fetchQuote: id => dispatch(fetchQuote(id)),
    fetchVideo: id => dispatch(fetchVideo(id)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  msp,
  mdp
)(Favorites);
