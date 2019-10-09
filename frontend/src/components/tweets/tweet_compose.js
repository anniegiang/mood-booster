import React from "react";
import TweetBox from "./tweet_box";

class TweetCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      newTweet: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ newTweet: nextProps.newTweet.text });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.composeTweet({ text: this.state.text });
    this.setState({ text: "" });
  }

  update() {
    return e => this.setState({ text: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="textarea"
            value={this.state.text}
            onChange={this.update()}
            placeholder="Write a tweet..."
          />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <TweetBox
          text={this.state.newTweet}
        />
      </div>
    );
  }
}

export default TweetCompose;
