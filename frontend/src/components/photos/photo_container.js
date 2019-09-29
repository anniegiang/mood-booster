import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_actions";
import { saveContent } from "../../actions/user_actions";
import { createComment } from "../../actions/comment_actions";
import Photo from "./photo";

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.content.photos[ownProps.match.params.photo_id],
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: id => dispatch(fetchPhoto(id)),
    saveContent: data => dispatch(saveContent(data)),
    createComment: data => dispatch(createComment(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
