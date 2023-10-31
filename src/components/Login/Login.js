import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Login extends Component {
  state = {
    isAuthenticated: false,
  };

  handleLogin = (email, password) => {
    // Simulate a login request (replace this with actual login logic)
    if (email === "user@example.com" && password === "password") {
      this.setState({ isAuthenticated: true });
    } else {
      alert("Invalid email or password");
    }
  };

  render() {
    const { isAuthenticated } = this.state;

    if (isAuthenticated) {
      return <p>Welcome, you are logged in!</p>;
    }

    return (
      <div>
        <h2>Login</h2>
        <LoginForm onLogin={this.handleLogin} />
      </div>
    );
  }
}

export default Login;
