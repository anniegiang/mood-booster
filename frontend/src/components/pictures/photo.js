import React from "react";

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.photoID 

//    this.text = this.props.text;
//    this.author = this.props.author;
  }

  componentDidMount() {
    this.props.fetchPhoto(this.id);
  }

//   saveFavorite(e) {
//     e.preventDefault();
//     
//   }


  render() {
    
      return (
        <div>
          <p>Testing</p>
          <img src={this.props.PhotoURL}></img>
        </div>

        <button onClick={}>Save to Favorites</button>
      );
    
  }
}

export default Photo;
