import { connect } from "react-redux";
import { updateComment, deleteComment } from "../../actions/comment_actions";
import Comments from "./comments";

const mapStateToProps = state => {
  return {
    user: state.user,
    currentUser: state.session.user,
    isAuthenticated: state.session.isAuthenticated
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
