import React from "react";
import "./photo.css";

class Photo extends React.Component {
  constructor(props) {
    super(props);

    // this.id = this.props.photoID
    this.state = {
      comment: ""
    };

    this.savePhoto = this.savePhoto.bind(this);
    this.createComment = this.createComment.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photo_id);
  }

  handleComment(e) {
    this.setState({ comment: e.target.value });
  }

  createComment(e) {
    e.preventDefault();
    let data = {
      userId: this.props.currentUser.id,
      photoId: this.props.match.params.photo_id,
      text: this.state.comment
    };
    this.props.saveContent(data);
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
      return null;
    }
    return (
      <div className="photo-div">
        <h1>{this.props.photo.title}</h1>
        <img src={this.props.photo.photoUrl}></img>
        {/* <p>Photo will go here</p> */}
        <button onClick={this.savePhoto}>Save to Favorites</button>
        <form onSubmit={this.createComment}>
          <input
            type="text"
            onChange={this.handleComment}
            value={this.state.comment}
          />
          <input type="submit" value="Comment" />
        </form>
      </div>
    );
  }
}

export default Photo;
