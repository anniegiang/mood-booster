import React from "react";
import "./about_page.css";

class AboutPage extends React.Component {
  handleClick() {
    this.props.history.push({ pathname: "/home" });
  }

  render() {
    return (
      <div className="about-container">
        <div className="about-window">
          <h2>Welcome to</h2>

          <div className="logo-main"></div>

          <p>
            Being in tech can be a grueling experience where individuals learn a
            lot, but still feel like they don't understand anything. Drawing
            from our experiences, we learned that productivity is directly
            correlated to an individual's mood, and so we've set out to create a
            way to boost that mood by providing content tailored to what you are
            experiencing now. Click the button below to check it out, or check
            out the profiles of the creators!
          </p>

          <br></br>
          <button className="main_button" onClick={this.handleClick.bind(this)}>
            Home Page
          </button>

          <div className="creators">
            <h4>Creators:</h4>
            <div className="dropdown">
              <button className="dropbtn">Annie</button>
              <div className="dropdown-content">
                {/* <a href="#">Personal Site</a> */}
                <a href="https://github.com/anniegiang">GitHub</a>
                <a href="https://www.linkedin.com/in/annie-giang-113bb4101/">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Johnson</button>
              <div className="dropdown-content">
                {/* <a href="#">Personal Site</a> */}
                <a href="https://github.com/joonson22">GitHub</a>
                <a href="https://www.linkedin.com/in/jdlai/">LinkedIn</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Rebecca</button>
              <div className="dropdown-content">
                {/* <a href="#">Personal Site</a> */}
                <a href="https://github.com/rebeccalambert">GitHub</a>
                <a href="https://www.linkedin.com/in/rebeccajlambert/">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
