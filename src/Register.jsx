import React, { useState } from "react";
import { registerUser } from "./authSlice.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const result = await registerUser(firstname, lastname, email, password);
    if (result) {
      alert("Registration successful! Please log in.");
      navigate("/login");
    } else {
      alert("Error registering. Try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
      <input type="text" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
