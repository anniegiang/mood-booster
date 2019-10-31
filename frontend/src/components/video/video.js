import React from "react";
import CommentsContainer from "../comments/comments_container";
import "./video.css";
import "../comments/comments.css";

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };

    this.saveVideo = this.saveVideo.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
    this.createComment = this.createComment.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.video_id);
  }

  handleComment(e) {
    this.setState({ comment: e.target.value });
  }

  createComment(e) {
    if (this.props.isAuthenticated) {
      e.preventDefault();
      let data = {
        userId: this.props.currentUser.id,
        videoId: this.props.match.params.video_id,
        text: this.state.comment,
        type: "video"
      };
      this.setState({ comment: "" });
      this.props.createComment(data);
    } else {
      alert("Must be logged in.");
    }
  }

  renderComments() {
    if (this.props.video.comments !== undefined) {
      return (
        <div className="comments">
          <CommentsContainer type="video" content={this.props.video} />
        </div>
      );
    }
  }

  renderFavButton() {
    if (this.props.user.videoSave.includes(this.props.match.params.video_id)) {
      return (
        <button className="fav-btn" onClick={this.deleteVideo}>
          Remove from Favorites
        </button>
      );
    } else {
      return (
        <button className="fav-btn" onClick={this.saveVideo}>
          Save to Favorites
        </button>
      );
    }
  }
  saveVideo(e) {
    e.preventDefault();
    let data = {
      contentType: "videoSave",
      contentId: this.props.video._id,
      userId: this.props.currentUser.id
    };
    // this.setState({ liked: !this.state.liked });
    this.props.saveContent(data);
  }

  deleteVideo(e) {
    e.preventDefault();
    let data = {
      contentType: "videoSave",
      contentId: this.props.match.params.video_id,
      userId: this.props.currentUser.id
    };
    // debugger
    // this.setState({ liked: !this.state.liked });
    this.props.deleteContent(data);
  }

  render() {
    if (!this.props.video) {
      return null;
    }
    return (
      <div className="video-div">
        <h1 className="title">{this.props.video.title}</h1>
        <video className="video" controls height="576" width="1024">
          <source src={this.props.video.videoUrl}></source>
        </video>

        {this.renderFavButton()}

        <form className="comments-container" onSubmit={this.createComment}>
          <input
            className="comments-input"
            type="textarea"
            onChange={this.handleComment}
            value={this.state.comment}
          />
          <input className="comments-submit" type="submit" value="Comment" />
        </form>
        {this.renderComments()}
      </div>
    );
  }
}

export default Video;
