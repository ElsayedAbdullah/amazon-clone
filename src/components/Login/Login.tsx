import Logo from "../../images/login-logo.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
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
          <input type="email" id="email" value={""} onChange={() => {}} />
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
          <input type="password" id="password" value={""} onChange={() => {}} />
          <button className="login-signInBtn" type="submit" onClick={() => {}}>
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={() => {}}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
