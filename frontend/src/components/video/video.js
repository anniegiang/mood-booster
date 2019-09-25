import React from 'react';
import { Link } from "react-router-dom";
import "./video.css";

class Video extends React.Component {

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.video_id)
    }



    render() {
        if (!this.props.video) {
            return null
        }
        return(
            <div className="video-div">
                 <h1 className="title">{this.props.video.title}</h1>
                 <video className="video" controls>
                    <source src=''></source>
                </video>
               
                    <button>
                        Save to my list
                    </button>
               
            </div>
        )
    }
}

export default Video;