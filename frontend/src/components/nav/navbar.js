import React from "react";
import { Link } from "react-router-dom";

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
        <div>
          <Link to={"/tweets"}> All Tweets </Link>
          <Link to={"/profile"}> Profile </Link>
          <Link to={"/new_tweet"}> Write a Tweet </Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Mood Booster</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
