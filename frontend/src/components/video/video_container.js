import { connect } from "react-redux";
import { fetchVideo } from "../../actions/video_actions";
import { saveContent, deleteContent } from "../../actions/user_actions";
import { createComment } from "../../actions/comment_actions";
import Video from "./video";
const msp = (state, ownProps) => {
  return {
    video: state.content.videos[ownProps.match.params.video_id],
    isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.user,
    user: state.user
  };
};

const mdp = dispatch => {
  return {
    fetchVideo: id => dispatch(fetchVideo(id)),
    saveContent: data => dispatch(saveContent(data)),
    createComment: data => dispatch(createComment(data)),
    deleteContent: data => dispatch(deleteContent(data))
  };
};

export default connect(
  msp,
  mdp
)(Video);
