import { connect } from "react-redux";
import { fetchRandomContent } from "../../actions/random_content_actions";
import NavBar from "./navbar";

const msp = state => {
  return {
    randomContent: this.state.content.randomContent
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
)(NavBar);
