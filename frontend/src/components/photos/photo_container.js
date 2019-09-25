import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_actions";
import { likeContent } from "../../actions/user_actions";
import Photo from "./photo";

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    photo: state.content.photos[ownProps.match.params.photo_id],
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: id => dispatch(fetchPhoto(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
