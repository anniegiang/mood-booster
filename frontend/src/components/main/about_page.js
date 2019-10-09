import React from "react";
import "./about_page.css";

class AboutPage extends React.Component {

  handleClick() {
    this.props.history.push({ pathname: '/form' })
  }

  render() {
    return (
      <div className="about-container">
        <div className="about-window">
          <h2>Welcome to</h2>
          <div className="logo-main"></div>
          <p>Being in tech can be a grueling experience where individuals learn a lot, but still feel like they don't understand anything. 
            Drawing from our experiences, we learned that productivity is directly correlated to an individual's mood, and so we've set out to create a way to boost that mood and, 
<<<<<<< HEAD
            hopefully, overall performance. Click the button above to check it out, or check out the profiles of the creators!</p>
          {/* <button className="main_button" onClick={this.handleClick.bind(this)}>Boost your mood!</button> */}
        
            
            <div className="creators">
              <h4>Creators:</h4>     
                <div className="dropdown">
                    <button className="dropbtn">Annie</button>
                    <div className="dropdown-content">
                        {/* <a href="#">Personal Site</a> */}
                        <a href="https://github.com/anniegiang">GitHub</a>
                        <a href="https://www.linkedin.com/in/annie-giang-113bb4101/">LinkedIn</a>
=======
            hopefully, overall performance. Click the button below to check it out, or check out the profiles of the creators!</p>
          <button className="main_button" onClick={this.handleClick.bind(this)}>Boost your mood!</button>
        
            <h4>Creators:</h4>
            <div className="creators">     
                <div className="dropdown">
                    <button className="dropbtn">Annie</button>
                    <div className="dropdown-content">
                        <a href="#">Personal Site</a>
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Johnson</button>
                    <div className="dropdown-content">
<<<<<<< HEAD
                        {/* <a href="#">Personal Site</a> */}
=======
                        <a href="#">Personal Site</a>
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
                        <a href="https://github.com/joonson22">GitHub</a>
                        <a href="https://www.linkedin.com/in/jdlai/">LinkedIn</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Rebecca</button>
                    <div className="dropdown-content">
<<<<<<< HEAD
                        {/* <a href="#">Personal Site</a> */}
                        <a href="https://github.com/rebeccalambert">GitHub</a>
                        <a href="https://www.linkedin.com/in/rebeccajlambert/">LinkedIn</a>
=======
                        <a href="#">Personal Site</a>
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
