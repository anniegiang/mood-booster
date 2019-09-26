import React from "react";
import { Link } from "react-router-dom";
import "./video.css";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.saveVideo = this.saveVideo.bind(this);
  }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.video_id)
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
            return null
        }
        // debugger
        return(
            <div className="video-div">
                 <h1 className="title">{this.props.video.title}</h1>
                 <video className="video" controls height="576" width="1024">
                    <source src={this.props.video.videoUrl}></source>  Can't play video because 
                </video>
               
                    <button>
                        Save to my list
                    </button>
               
            </div>
        )
    }

  
}

export default Video;
