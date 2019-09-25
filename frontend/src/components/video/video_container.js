import { connect } from "react-redux";
import { fetchVideo } from "../../actions/video_actions";
import Video from "./video";
const msp = (state, ownProps) => {
  // debugger
  return {
    video: state.content.videos[ownProps.match.params.video_id]
  };
};

const mdp = dispatch => {
  return {
    fetchVideo: id => dispatch(fetchVideo(id))
  };
};

export default connect(
  msp,
  mdp
)(Video);
