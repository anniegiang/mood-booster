import React from "react";
import CommentsContainer from "../comments/comments_container";
import "./quote.css";
import "../comments/comments.css";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    // this.id = this.props.quoteID

    //    this.text = this.props.text;
    //    this.author = this.props.author;

    this.state = {
      comment: ""
    };

    this.saveQuote = this.saveQuote.bind(this);
    this.createComment = this.createComment.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuote(this.props.match.params.quote_id);
  }

  handleComment(e) {
    this.setState({ comment: e.target.value });
  }

  createComment(e) {
    e.preventDefault();
    let data = {
      userId: this.props.currentUser.id,
      quoteId: this.props.match.params.quote_id,
      text: this.state.comment,
      type: "quote"
    };
    this.props.createComment(data);
  }

  renderComments() {
    if (this.props.quotes.comments !== undefined) {
      return (
        <div className="comments">
          <CommentsContainer type="photo" content={this.props.photo} />
        </div>
      );
    }
  }

  saveQuote(e) {
    e.preventDefault();
    let data = {
      contentType: "quoteSave",
      contentId: this.props.match.params.quote_id,
      userId: this.props.currentUser.id
    };
    this.props.saveContent(data);
  }

  render() {
    if (!this.props.quotes) {
      return null;
    }
    return (
      <div className="quote-background">
        <div className="quote-box">
          <h1 className="quote-text">"{this.props.quotes.quoteText}"</h1>
          <h3 className="author">- {this.props.quotes.author}</h3>
          {/* <p>Quote will go here</p> */}
          <button onClick={this.saveQuote}>Save to Favorites</button>
          
          <form className="comments-container" onSubmit={this.createComment}>
            <input
              type="text"
              onChange={this.handleComment}
              value={this.state.comment}
              className="comments-input"
            />
            <input className="comments-submit" type="submit" value="Comment" />
          </form>
        </div>
        {this.renderComments()}
      </div>
    );
  }
}

export default Quote;
