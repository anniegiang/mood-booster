import React from "react";
import { withRouter } from "react-router-dom";
import "./session_form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
    this.renderEmailErrors = this.renderEmailErrors.bind(this);
    this.renderHandleErrors = this.renderHandleErrors.bind(this);
    this.renderPasswordErrors = this.renderPasswordErrors.bind(this);
    this.renderConfirmPasswordErrors = this.renderConfirmPasswordErrors.bind(
      this
    );
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  renderEmailErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Email")) {
        return (
          <div className="errors-container">
            <p className="error">{err}</p>
          </div>
        );
      }
    }
  }

  renderHandleErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Handle")) {
        return (
          <div className="errors-container">
            <p className="error">{err}</p>
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
            <p className="error">{err}</p>
          </div>
        );
      }
    }
  }

  renderConfirmPasswordErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Confirm")) {
        return (
          <div className="errors-container">
            <p className="error">{err}</p>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div className="form-container signup">
        <div className="form-inner">
          <h1>Sign Up</h1>
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
              className="input-handle"
              type="text"
              value={this.state.handle}
              onChange={this.update("handle")}
              placeholder="Handle"
            />
            {this.renderHandleErrors()}
            <input
              className="input-password"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            {this.renderPasswordErrors()}
            <input
              className="input-password"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            {this.renderConfirmPasswordErrors()}
            <br />
            <input className="submit-btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
