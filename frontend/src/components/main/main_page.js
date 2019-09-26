import React from "react";
import "./main_page.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainpage-container">
        <div className="content-otd-container">
          <div className="content">
            <h3>Boost of the Day</h3>
            <img
              src="https://www.fosi.org/media/images/22601782810_cbe3ede5f5_o.focus-none.original.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
