import React, { useEffect, useState } from "react";
import "../css/signUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  },[]);

  const handleClick = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5500/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.log(result);

    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <input
        placeholder="Enter name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <input
        placeholder="Enter email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <input
        placeholder="Enter password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default SignUp;
