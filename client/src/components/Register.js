import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      role: "",
      error: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const { email, password, role } = this.state;

    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        email,
        password,
        role,
      });

      console.log(response.data.message); // Message from the server
      // You can redirect the user to a success page or perform other actions here
    } catch (error) {
      console.error("Error during registration:", error.response.data.message);
      this.setState({ error: "Registration failed" });
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
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
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={this.state.role}
            onChange={this.handleInputChange}
          />
          <button type="submit">Register</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
      </div>
    );
  }
}

export default Register;
