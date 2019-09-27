import React from "react";
import "./quote.css";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    // this.id = this.props.quoteID

    //    this.text = this.props.text;
    //    this.author = this.props.author;
    this.saveQuote = this.saveQuote.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuote(this.props.match.params.quote_id);
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
      return null
  }
      return (
        <div className="quote-background">
          <div className="quote-box">
              <h1 className="quote-text">"{this.props.quotes.quoteText}"</h1>
              <h3 className="author">- {this.props.quotes.author}</h3>
              {/* <p>Quote will go here</p> */}
              <button onClick={this.saveQuote}>Save to Favorites</button>
          </div>
        </div>
      );
    
  }
}

export default Quote;
