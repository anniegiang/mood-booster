import React from "react";

class Photo extends React.Component {
  constructor(props) {
    super(props);

    // this.id = this.props.photoID 

    this.savePhoto = this.savePhoto.bind(this)
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
      return null
  }
      return (
        <div>
          <h3>{this.props.photo.title}</h3>
          <img src={this.props.photo.photoURL}></img>
          {/* <p>Photo will go here</p> */}
          <button onClick={this.savePhoto}>Save to Favorites</button>
        </div>

      );
    
  }
}

export default Photo;
