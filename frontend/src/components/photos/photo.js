import React from "react";
import "./photo.css";

class Photo extends React.Component {
  constructor(props) {
    super(props);

    // this.id = this.props.photoID

    this.savePhoto = this.savePhoto.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photo_id);
  }

  savePhoto(e) {
    e.preventDefault();
    let data = {
      contentType: "photoSave",
      contentId: this.props.match.params.photo_id,
      userId: this.props.currentUser.id
    };
    this.props.saveContent(data);
  }

  render() {
    if (!this.props.photo) {
      return null
  }
      return (
        <div className="photo-div">
          <h1>{this.props.photo.title}</h1>
          <img src={this.props.photo.photoUrl}></img>
          {/* <p>Photo will go here</p> */}
          <button onClick={this.savePhoto}>Save to Favorites</button>
        </div>

      );
    
  }
}

export default Photo;
