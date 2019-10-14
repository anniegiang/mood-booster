import React from "react";
import CommentsContainer from "../comments/comments_container";
import "./photo.css";
import "../comments/comments.css";

class Photo extends React.Component {
  constructor(props) {
    super(props);

    // this.id = this.props.photoID
    this.state = {
      comment: ""
    };

    this.savePhoto = this.savePhoto.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.createComment = this.createComment.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photo_id);
  }

  handleComment(e) {
    this.setState({ comment: e.target.value });
  }

  createComment(e) {
    if (this.props.isAuthenticated) {
      e.preventDefault();
      let data = {
        userId: this.props.currentUser.id,
        photoId: this.props.match.params.photo_id,
        text: this.state.comment,
        type: "photo"
      };
      this.setState({ comment: "" });
      this.props.createComment(data);
    } else {
      alert("Must be logged in.");
    }
  }

  renderComments() {
    if (this.props.photo.comments !== undefined) {
      return (
        <div className="comments">
          <CommentsContainer type="photo" content={this.props.photo} />
        </div>
      );
    }
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
  
  deletePhoto(e) {
    e.preventDefault();
    let data = {
      contentType: "photoSave",
      contentId: this.props.match.params.photo_id,
      userId: this.props.currentUser.id
    };
    // debugger
    this.props.deleteContent(data);
  }

  render() {
    if (!this.props.photo) {
      return null;
    }
    // debugger
    return (
      <div className="photo-div">
        <h1 className="photo-title">{this.props.photo.title}</h1>
        <img src={this.props.photo.photoUrl} alt={this.props.photo.title}></img>
      
        {this.props.currentUser.photoSave.includes(this.props.photo._id) ? (
          <button className="fav-btn" onClick={this.deletePhoto}>
            Remove from Favorites
          </button>
        ) : ( 
          <button className="fav-btn" onClick={this.savePhoto}>
            Save to Favorites
          </button>
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
    );
  }
}

export default Photo;
