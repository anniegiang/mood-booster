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
          <Link className="nav-boost" to={"/boost"}>
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
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-container">
        <a href="/#" className="nav-logo">
          Mood Booster
        </a>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
