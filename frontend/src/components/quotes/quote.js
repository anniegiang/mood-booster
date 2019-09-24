import React from "react";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.quoteID 

//    this.text = this.props.text;
//    this.author = this.props.author;
    this.saveQuote = this.saveQuote.bind(this)
  }

  componentDidMount() {
    this.props.fetchQuote(this.props.match.params.id);
  }

  saveQuote(e) {
    e.preventDefault();
    // this.props.composeTweet({ text: this.state.text });
    // this.setState({ text: "" });
  }


  render() {
    if (!this.props.quote) {
      return null
  }
      return (
        <div>
            <h3>{this.props.text}</h3>
            <h5>{this.props.author}</h5>
            {/* <p>Quote will go here</p> */}
            <button onClick={this.saveQuote}>Save to Favorites</button>
        </div>

      );
    
  }
}

export default Quote;
