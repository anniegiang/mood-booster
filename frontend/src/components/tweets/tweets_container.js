import { connect } from "react-redux";
import Tweets from "./tweets";
import { fetchTweets } from "../../actions/tweet_actions";

const msp = state => {
  return {
    tweets: Object.values(state.tweets.all)
  };
};

const mdp = dispatch => {
  return {
    fetchTweets: () => dispatch(fetchTweets())
  };
};

export default connect(
  msp,
  mdp
)(Tweets);
