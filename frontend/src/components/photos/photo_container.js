import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_actions";
import { fetchUser } from "../../actions/user_actions";
import { saveContent, deleteContent } from "../../actions/user_actions";
import { createComment } from "../../actions/comment_actions";
import Photo from "./photo";

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.content.photos[ownProps.match.params.photo_id],
    isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.user,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: id => dispatch(fetchPhoto(id)),
    saveContent: data => dispatch(saveContent(data)),
    createComment: data => dispatch(createComment(data)),
    deleteContent: data => dispatch(deleteContent(data)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
