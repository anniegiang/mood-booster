import { connect } from "react-redux";
import { fetchRandomContent } from "../../actions/random_content_actions";
import MainPage from "./main_page";

const msp = (state, ownProps) => {
  return {
    randomContent: state.content.randomContent.content
  };
};

const mdp = dispatch => {
  return {
    fetchRandomContent: () => dispatch(fetchRandomContent())
  };
};

export default connect(
  msp,
  mdp
)(MainPage);
