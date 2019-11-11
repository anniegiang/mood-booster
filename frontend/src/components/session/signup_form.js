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
    
    let loginuser = {
      email: this.state.email,
      password: this.state.password
    };
    
    this.props.signup(user, this.props.history)
      .then(user => {
        this.props.login(loginuser);
      })
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
        return <div>{err}</div>;
      }
    }
  }

  renderHandleErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Handle")) {
        return <div>{err}</div>;
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

  renderConfirmPasswordErrors() {
    for (let err of Object.values(this.state.errors)) {
      if (err.includes("Confirm")) {
        return <div>{err}</div>;
      }
    }
  }

  render() {
    return (
      <div className="session-background">
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
              <div className="errors-container">{this.renderEmailErrors()}</div>
              <input
                className="input-handle"
                type="text"
                value={this.state.handle}
                onChange={this.update("handle")}
                placeholder="Handle"
              />
              <div className="errors-container">
                {this.renderHandleErrors()}
              </div>
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
              <input
                className="input-password"
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <div className="errors-container">
                {this.renderConfirmPasswordErrors()}
              </div>
              <br />
              <input className="submit-btn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
