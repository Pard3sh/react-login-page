import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    // Basic validation
    if (!username || !password) {
      this.setState({ error: "Please enter both username and password" });
      return;
    }

    // Here, you can make an API request to your backend to perform authentication
    // For simplicity, we'll just show an error message
    this.setState({ error: "Invalid username or password" });

    // You can replace this with an actual API call to authenticate the user
    // Example API call with axios:
    // try {
    //   const response = await axios.post('/api/login', { username, password });
    //   // If authentication is successful, you can redirect the user to a different page
    //   // window.location.href = '/dashboard'; // Replace with your route
    // } catch (error) {
    //   this.setState({ error: 'Invalid username or password' });
    // }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
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
