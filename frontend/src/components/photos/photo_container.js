import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_action";
import Photo from "./photo";

const mapStateToProps = state => {
  return {
    photo: state.content.photo[ownProps.match.params.id],
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
