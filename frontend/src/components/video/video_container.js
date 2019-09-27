import { connect } from "react-redux";
import { fetchVideo } from "../../actions/video_actions";
import { saveContent } from "../../actions/user_actions";
import Video from "./video";
const msp = (state, ownProps) => {
  return {
    video: state.content.videos[ownProps.match.params.video_id],
    currentUser: state.session.user
  };
};

const mdp = dispatch => {
  return {
    fetchVideo: id => dispatch(fetchVideo(id)),
    saveContent: data => dispatch(saveContent(data))
  };
};

export default connect(
  msp,
  mdp
)(Video);
