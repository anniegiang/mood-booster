import React from "react";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.quoteID 

//    this.text = this.props.text;
//    this.author = this.props.author;
  }

  componentDidMount() {
    this.props.fetchQuote(this.id);
  }

  saveQuote(e) {
    e.preventDefault();
    this.props.composeTweet({ text: this.state.text });
    this.setState({ text: "" });
  }


  render() {
    
      return (
        <div>
            <h3>{this.props.text}</h3>
            <h5>{this.props.author}</h5>
            
        </div>

        <button onClick={saveQuote()}>Save to Favorites</button>
      );
    
  }
}

export default Quote;
