import React from "react";
import "./main_page.css";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderRandomContentType = this.renderRandomContentType.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchRandomContent();
    // this.props.fetchUser(this.props.user.id);
  }

  renderRandomContentType() {
    const { randomContent } = this.props;
    if ("quoteText" in randomContent) {
      return (
        <Link to={`/quotes/${randomContent._id}`} key={randomContent._id}>
          <span className="main-quote">
            <p className="quote-text">"{randomContent.quoteText}" </p>
            <p className="quote-author">-{randomContent.author}</p>
          </span>
        </Link>
      );
    }

    if ("videoUrl" in randomContent) {
      return (
        <Link to={`/videos/${randomContent._id}`} key={randomContent._id}>
          <span>
            <p className="vid_title">{randomContent.title}</p>
            <video
              width="426"
              height="240"
              src={randomContent.videoUrl}
              controls
            ></video>
          </span>
        </Link>
      );
    }

    if ("photoUrl" in randomContent) {
      return (
        <Link to={`/photos/${randomContent._id}`} key={randomContent._id}>
          <img
            className="main-photo"
            src={randomContent.photoUrl}
            alt="random-pic"
          />
        </Link>
      );
    }
  }

  handleClick() {
    this.props.history.push({ pathname: "/form" });
  }

  render() {
    if (!this.props.randomContent) {
      return null;
    }

    return (
      <div className="mainpage-container">
        <div className="splash-window">
          <div className="splash-content">
            {/* <h2>Welcome to</h2> */}
            {/* <div className="logo-main"></div> */}
            <p className="random_content">Motivational Content:</p>
            {this.renderRandomContentType()}
            <button className="main_button" onClick={this.handleClick}>
              Boost your mood!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
