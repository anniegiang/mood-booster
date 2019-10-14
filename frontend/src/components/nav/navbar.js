import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id)
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
          <Link className="nav-boost" to={"/form"}>
            Boost your mood
          </Link>
          <Link className="nav-profile" to={"/favorites"}>
            My Favorites
          </Link>
          <a className="nav-logout" onClick={this.logoutUser}>
            Logout
          </a>
        </div>
      );
    } else {
      return (
        <div className="nav-links">
          <Link className="nav-boost" to={"/form"}>
            Boost your mood
          </Link>
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
        <a href="/" className="nav-logo">
          <div className="logo"></div>
        </a>
          {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
