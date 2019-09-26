import React from "react";
import "./about_page.css";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-window">
          <h2>Welcome to</h2>
          <div className="logo-main"></div>
          <p>Being in tech can be a grueling experience where individuals learn a lot, but still feel like they don't understand anything. 
            Drawing from our experiences, we learned that productivity is directly correlated to an individual's mood, and so we've set out to create a way to boost that mood and, 
            hopefully, overall performance. Click the button below to check it out, or check out the profiles of the creators!</p>
          <button className="main_button">Boost your mood!</button>
        
            <h4>Creators:</h4>
            <div className="creators">     
                <div className="dropdown">
                    <button className="dropbtn">Annie<i class="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                        <a href="#">Personal Site</a>
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Johnson<i class="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                        <a href="#">Personal Site</a>
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Rebecca<i class="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                        <a href="#">Personal Site</a>
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
