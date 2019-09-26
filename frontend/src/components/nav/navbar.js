import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    const { loggedIn } = this.props;

    if (loggedIn) {
      return (
        <div className="nav-links">
          <Link className="nav-boost" to={"/"}>
            Boost your mood
          </Link>
          <Link className="nav-profile" to={"/profile"}>
            Profile
          </Link>
          <a className="nav-logout" onClick={this.logoutUser}>
            Logout
          </a>
        </div>
      );
    } else {
      return (
        <div className="nav-links">
          <Link className="nav-signup" to={"/signup"}>
            Signup
          </Link>
          <Link className="nav-login" to={"/login"}>
            Login
          </Link>
          <Link className="nav-about" to={"/about"}>
            About
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-container">
        <a href="/#" className="nav-logo">
          <div className="logo"></div>
        </a>
        <button className="icon">&#9776;</button>
        <div className="dropdown">
          
          {this.getLinks()}
        </div>
        {/* <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a> */}
      </div>
    );
  }
}

export default NavBar;
