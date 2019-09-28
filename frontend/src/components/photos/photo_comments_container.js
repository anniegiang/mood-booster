import { connect } from "react-redux";
import { deletePhotoComment } from "../../actions/photo_actions";
import PhotoComments from "./photo_comments";

// const mapStateToProps = (state, ownProps) => {
//   return {
//     photo: state.content.photos[ownProps.match.params.photo_id],
//   };
// };

const mapDispatchToProps = dispatch => {
  debugger;
  return {
    deletePhotoComment: data => dispatch(deletePhotoComment(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PhotoComments);
