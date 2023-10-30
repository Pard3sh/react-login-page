import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/register", {
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="register">
      <h1> Login </h1>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name=""
          id=""
        />
        <input type="submit" onClick={submit} />
      </form>
    </div>
  );
}

export default Login;