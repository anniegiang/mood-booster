import React from "react";

class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchTweets();
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTweet(e.currentTarget.value);
  }

  render() {
    if (this.props.tweets.length === 0) {
      return null;
    }
    return (
      <div>
        <ul>
          {this.props.tweets.map(tweet => (
            <li key={tweet._id}>
              {tweet._id}
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
