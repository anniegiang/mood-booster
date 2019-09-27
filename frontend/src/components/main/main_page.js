import React from "react";
import "./main_page.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderRandomContentType = this.renderRandomContentType.bind(this);
  }

  componentDidMount() {
    this.props.fetchRandomContent();
  }

  renderRandomContentType() {
    const { randomContent } = this.props;
    if ("quoteText" in randomContent) {
      return <p>{randomContent.quoteText}</p>;
    }

    if ("videoUrl" in randomContent) {
      return <video src={randomContent.videoUrl}></video>;
    }

    if ("photoUrl" in randomContent) {
      return <img src={randomContent.photoUrl} alt="random-pic" />;
    }
  }

  render() {
    if (!this.props.randomContent) {
      return null;
    }

    return (
      <div className="mainpage-container">
        <div className="content-otd-container">
          <div className="content">
            <h4>Boost of the Day</h4>
            {this.renderRandomContentType()}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
