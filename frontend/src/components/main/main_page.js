import React from "react";
import "./main_page.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainpage-container">
        <div className="content-otd-container">
          <div className="content">
            <h4>Boost of the Day</h4>
            {this.props.randomContent.title}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
