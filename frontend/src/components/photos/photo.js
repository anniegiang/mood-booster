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
    e.preventDefault();
    let data = {
      userId: this.props.currentUser.id,
      photoId: this.props.match.params.photo_id,
      text: this.state.comment,
      type: "photo"
    };
    this.setState({ comment: "" });
    this.props.createComment(data);
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

  render() {
    if (!this.props.photo) {
      return null;
    }
    return (
      <div className="photo-div">
        <h1 className="photo-title">{this.props.photo.title}</h1>
        <img src={this.props.photo.photoUrl}></img>
        {/* <p>Photo will go here</p> */}
        <button className="fav-btn" onClick={this.savePhoto}>
          Save to Favorites
        </button>

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
