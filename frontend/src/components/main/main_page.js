import React from "react";
import "./main_page.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainpage-container">
        <div className="splash-window">
          <h2>Welcome to</h2>
          <div className="logo-main"></div>
          <p>Being in tech can be a grueling experience where individuals can learn a lot, but still feel like they don't understand anything. 
            Drawing from our experiences, we learned that productivity is directly correlated to an indivdual's mood, and so we've set out to create a way to boost that mood and, 
            hopefully, overall performance. Click the button below to check it out!</p>
          <button className="main_button">Boost your mood!</button>
        </div>
      </div>
    );
  }
}

export default MainPage;
