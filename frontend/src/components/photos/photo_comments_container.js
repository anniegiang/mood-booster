import { connect } from "react-redux";
import { updateComment, deleteComment } from "../../actions/comment_actions";
import PhotoComments from "./photo_comments";

const mapDispatchToProps = dispatch => {
  return {
    updateComment: data => dispatch(updateComment(data)),
    deleteComment: data => dispatch(deleteComment(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PhotoComments);
