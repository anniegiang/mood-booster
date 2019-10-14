import { connect } from "react-redux";
import { updateComment, deleteComment } from "../../actions/comment_actions";
import Comments from "./comments";

const mapStateToProps = state => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateComment: data => dispatch(updateComment(data)),
    deleteComment: data => dispatch(deleteComment(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
