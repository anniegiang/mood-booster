import { connect } from "react-redux";
import {
  deletePhotoComment,
  updatePhotoComment
} from "../../actions/photo_actions";
import PhotoComments from "./photo_comments";

const mapDispatchToProps = dispatch => {
  return {
    updatePhotoComment: data => dispatch(updatePhotoComment(data)),
    deletePhotoComment: data => dispatch(deletePhotoComment(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PhotoComments);
