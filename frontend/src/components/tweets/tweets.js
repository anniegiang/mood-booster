import React from "react";

class Tweets extends React.Component {
  componentDidMount() {
    this.props.fetchTweets();
  }

  render() {
    if (this.props.tweets.length === 0) {
      return null;
    }
    return (
      <div>
        <ul>
          {this.props.tweets.map(tweet => (
            <li key={tweet._id}>{tweet.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Tweets;
