import React from "react";
import "./tweets.css";

class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTweet(e.currentTarget.value);
    window.location.reload(false);
  }

  componentDidMount() {
    this.props.fetchTweets();
  }

  render() {
    return (
      <div className="tweets-container">
        <ul>
          {this.props.tweets.map(tweet => (
            <li key={tweet._id}>
              {tweet.text}
              <button value={tweet._id} onClick={this.handleDelete}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Tweets;
