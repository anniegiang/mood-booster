import React from "react";
import { withRouter } from "react-router-dom";
import "./login_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
  renderErrors() {
    return (
      <ul className="login-errors-container">
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="login-errors" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  renderEmailErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Email")) {
        return (
          <div className="login-errors-container">
            <p className="login-error-email">{err}</p>
          </div>
        );
      }
    }
  }

  renderPasswordErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Password")) {
        return (
          <div className="login-errors-container">
            <p className="login-error-password">{err}</p>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-inner">
          <h1>Log In</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              className="login-input-email"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            {this.renderEmailErrors()}
            <br />
            <input
              className="login-input-password"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            {this.renderPasswordErrors()}
            <br />
            <input className="login-submit-btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
