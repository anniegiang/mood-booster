import React from "react";
import { Link } from "react-router-dom";
import CommentsContainer from "../comments/comments_container";
import "./video.css";

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };

    this.saveVideo = this.saveVideo.bind(this);
    this.createComment = this.createComment.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.video_id);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.video_id);
  }

  handleComment(e) {
    this.setState({ comment: e.target.value });
  }

  createComment(e) {
    e.preventDefault();
    let data = {
      userId: this.props.currentUser.id,
      videoId: this.props.match.params.video_id,
      text: this.state.comment,
      type: "video"
    };
    this.props.createComment(data);
  }

  renderComments() {
    if (this.props.video.comments !== undefined) {
      return <CommentsContainer type="video" content={this.props.video} />;
    }
  }

  saveVideo(e) {
    e.preventDefault();
    let data = {
      contentType: "videoSave",
      contentId: this.props.video._id,
      userId: this.props.currentUser.id
    };
    this.props.saveContent(data);
  }

  render() {
    if (!this.props.video) {
      return null;
    }
    // debugger
    return (
      <div className="video-div">
        <h1 className="title">{this.props.video.title}</h1>
        <video className="video" controls height="576" width="1024">
          <source src={this.props.video.videoUrl}></source>
        </video>

        <button>Save to my list</button>
        <form onSubmit={this.createComment}>
          <input
            type="text"
            onChange={this.handleComment}
            value={this.state.comment}
          />
          <input type="submit" value="Comment" />
        </form>
        {this.renderComments()}
      </div>
    );
  }
}

export default Video;
