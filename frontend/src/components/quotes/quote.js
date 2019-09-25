import React from "react";

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
      return null;
    }
    return (
      <div>
        <h1>This is a quote</h1>
        <h3>{this.props.quotes.quoteText}</h3>
        <h5>{this.props.quotes.author}</h5>
        {/* <p>Quote will go here</p> */}
        <button onClick={this.saveQuote}>Save to Favorites</button>
      </div>
    );
  }
}

export default Quote;
