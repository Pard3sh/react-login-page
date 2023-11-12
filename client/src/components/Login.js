import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      // If authentication is successful, redirect the user to a different page
      // rn just logging message as a placeholder
      console.log("HEHE " + response.data.message);
      window.alert("Login successful");
    } catch (error) {
      console.error("Error during login:", error.response.data.message);
      this.setState({ error: "Invalid email or password" });
      console.error("Error during login:", error);
      console.error("Error response:", error.response); // Log the entire error object
      this.setState({ error: "Invalid email or password" });
      window.alert("Login unsuccessful");
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button type="submit">Login</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
      </div>
    );
  }
}

export default Login;
