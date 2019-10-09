import { connect } from "react-redux";
import TweetCompose from "./tweet_compose";
import { composeTweet } from "../../actions/tweet_actions";

const msp = state => {
  return {
    currentUser: state.session.user,
    newTweet: state.tweets.new
  };
};

const mdp = dispatch => {
  return {
    composeTweet: tweet => dispatch(composeTweet(tweet))
  };
};

export default connect(
  msp,
  mdp
)(TweetCompose);
