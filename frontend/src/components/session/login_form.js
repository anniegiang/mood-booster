import React from "react";
import { withRouter } from "react-router-dom";
import "./session_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderEmailErrors = this.renderEmailErrors.bind(this);
    this.renderPasswordErrors = this.renderPasswordErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderEmailErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Email")) {
        return (
          <div className="errors-container">
            <p className="error-email">{err}</p>
          </div>
        );
      }
    }
  }

  renderPasswordErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Password")) {
        return (
          <div className="errors-container">
            <p className="error-password">{err}</p>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-inner">
          <h1>Log In</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="input-email"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            {this.renderEmailErrors()}
            <input
              className="input-password"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            {this.renderPasswordErrors()}
            <input className="submit-btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
