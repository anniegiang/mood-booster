import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_action";

const mapStateToProps = state => {
  return {
    quote: state.quote,
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
