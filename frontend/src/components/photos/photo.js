import React from "react";
import "./photo.css";

class Photo extends React.Component {
  constructor(props) {
    super(props);

    // this.id = this.props.photoID

    this.savePhoto = this.savePhoto.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchPhoto(this.props.match.params.photo_id);
  }

  savePhoto(e) {
    e.preventDefault();
    // call action here
  }

  render() {
    if (!this.props.photo) {
      return null;
    }
    return (
      <div className="photo-container">
        <button onClick={this.savePhoto}>Save to Favorites</button>
        <h3>{this.props.photo.title}</h3>
        <img src={this.props.photo.photoUrl}></img>
        <p>Photo will go here</p>
      </div>
    );
  }
}

export default Photo;
