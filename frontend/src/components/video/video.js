import React from "react";
import { Link } from "react-router-dom";
class Video extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.video_id);
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
        <button>Save to my list</button>
      </div>
    );
  }
}

export default Video;
