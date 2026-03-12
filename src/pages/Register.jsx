import React, { useState } from "react";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Registration successful");
      window.location.href = "/";
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="container">

      <h2>Create Account</h2>

      <form onSubmit={handleRegister}>

        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default Register;