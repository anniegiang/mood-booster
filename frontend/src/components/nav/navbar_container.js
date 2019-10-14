import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./navbar";
import { fetchUser } from "../../actions/user_actions";

const msp = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    user: state.session.user
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  msp,
  mdp
)(NavBar);
