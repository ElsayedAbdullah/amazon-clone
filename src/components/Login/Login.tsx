import Logo from "../../images/login-logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // handle register a new user to firebase
  const handleRegister: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();
    if (!email || !password) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
        setLoading(true);
      })
      .catch(() => setError("Failed to Create User"))
      .finally(() => {
        setLoading(false);
      });
  };

  // handle register a new user to firebase
  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (!email || !password) return;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
        setLoading(true);
      })
      .catch(() => setError("Failed to Login User"))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        {error ? <p className="error">{error}</p> : null}
        <form>
          <label
            style={{
              fontWeight: "500",
              marginBottom: "5px",
              display: "block",
            }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            style={{
              fontWeight: "500",
              marginBottom: "5px",
              display: "block",
            }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login-signInBtn"
            type="submit"
            onClick={handleLogin}
          >
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button
            disabled={loading}
            type="submit"
            className="login-registerBtn"
            onClick={handleRegister}
          >
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
