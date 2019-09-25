import React from "react";
import { Link } from "react-router-dom";
class Video extends React.Component {
  constructor(props) {
    super(props);
    this.saveVideo = this.saveVideo.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.video_id);
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
    return (
      <div>
        <video controls width="500" height="500">
          <source src=""></source>
        </video>
        <h1>{this.props.video.title}</h1>
        <button onClick={this.saveVideo}>Save to Favorites</button>
      </div>
    );
  }
}

export default Video;
