import { connect } from "react-redux";
import { fetchRandomContent } from "../../actions/random_content_actions";
import MainPage from "./main_page";
import { fetchUser } from "../../actions/user_actions"

const msp = (state, ownProps) => {
  return {
    randomContent: state.content.randomContent.content,
    userId: state.session.user.id
  };
};

const mdp = dispatch => {
  return {
    fetchRandomContent: () => dispatch(fetchRandomContent()),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  msp,
  mdp
)(MainPage);
