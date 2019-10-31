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
    this.deleteQuote = this.deleteQuote.bind(this);
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
    if (this.props.isAuthenticated) {
      e.preventDefault();
      let data = {
        userId: this.props.currentUser.id,
        quoteId: this.props.match.params.quote_id,
        text: this.state.comment,
        type: "quote"
      };
      this.setState({ comment: "" });
      this.props.createComment(data);
    } else {
      alert("Must be logged in.");
    }
  }

  renderComments() {
    if (this.props.quotes.comments !== undefined) {
      return (
        <div className="comments">
          <CommentsContainer type="quote" content={this.props.quotes} />
        </div>
      );
    }
  }

  renderFavButton() {
    if (this.props.user.quoteSave.includes(this.props.match.params.quote_id)) {
      return (
        <button className="fav-btn" onClick={this.deleteQuote}>
          Remove from Favorites
        </button>
      );
    } else {
      return (
        <button className="fav-btn" onClick={this.saveQuote}>
          Save to Favorites
        </button>
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

  deleteQuote(e) {
    e.preventDefault();
    let data = {
      contentType: "quoteSave",
      contentId: this.props.match.params.quote_id,
      userId: this.props.currentUser.id
    };
    // debugger
    this.props.deleteContent(data);
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

          {this.props.user ? (
            <div>
              {this.props.user.quoteSave.includes(this.props.quotes._id) ? (
                <button className="fav-btn" onClick={this.deleteQuote}>
                  Remove from Favorites
                </button>
              ) : (
                <button className="fav-btn" onClick={this.saveQuote}>
                  Save to Favorites
                </button>
              )}
            </div>
          ) : (
            ""
          )}

          <form className="comments-container" onSubmit={this.createComment}>
            <input
              type="text"
              onChange={this.handleComment}
              value={this.state.comment}
              className="comments-input"
            />
            <input className="comments-submit" type="submit" value="Comment" />
          </form>
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

export default Quote;
