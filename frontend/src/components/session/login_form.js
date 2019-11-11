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
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
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

  handleDemoLogin(e) {
    this.setState({ email: "test@gmail.com", password: "password" }, () => {
      this.props.login({
        email: this.state.email,
        password: this.state.password
      });
    });
  }

  // Render the session errors if there are any
  renderEmailErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Email")) {
        return <div className="error">{err}</div>;
      }
    }
  }

  renderPasswordErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Password")) {
        return <div>{err}</div>;
      }
    }
  }

  render() {
    return (
      <div className="session-background">
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
              <div className="errors-container">{this.renderEmailErrors()}</div>
              <input
                className="input-password"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <div className="errors-container">
                {this.renderPasswordErrors()}
              </div>
              <br></br>
              <input className="submit-btn" type="submit" value="Submit" />
              <input
                onClick={this.handleDemoLogin}
                className="submit-btn demo-btn"
                type="submit"
                value="Demo Login"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
