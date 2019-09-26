import React from "react";
import "./main_page.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainpage-container">
        <div className="splash-window">
          <h2>Welcome to</h2>
          <div className="logo-main"></div>
          <p>Content of the day</p>
          <button className="main_button">Boost your mood!</button>
        </div>
      </div>
    );
  }
}

export default MainPage;
