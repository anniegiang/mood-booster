import React from "react";
import "./main_page.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderRandomContentType = this.renderRandomContentType.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchRandomContent();
    if (this.props.user) {
      this.props.fetchUser(this.props.user.id)
    }
  
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

  handleClick() {
    this.props.history.push({pathname: '/form'})
  }

  render() {
    if (!this.props.randomContent) {
      return null;
    }

    return (
      <div className="mainpage-container">
        <div className="splash-window">
          <h2>Welcome to</h2>
          <div className="logo-main"></div>
          <p>Content of the day</p>
          {this.renderRandomContentType()}
          <button className="main_button" onClick={this.handleClick}>Boost your mood!</button>
        </div>
      </div>
    );
  }
}

export default MainPage;
