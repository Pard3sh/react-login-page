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
      console.log("We are in the try statement here in line 25");
      // If authentication is successful, you can redirect the user to a different page
      // For simplicity, just log a message for now
      console.log("HEHE " + response.data.message);
    } catch (error) {
      console.error("Error during login:", error.response.data.message);
      this.setState({ error: "Invalid email or password" });
      console.error("Error during login:", error);
      console.error("Error response:", error.response); // Log the entire error object
      this.setState({ error: "Invalid email or password" });
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
