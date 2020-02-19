import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../scss/register.scss";
import { AuthContext } from "../context/AuthContext";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //context
  const { login, state } = useContext(AuthContext);
  const { isAuthenticated, loading, error, passwordErr, emailErr } = state;

  const handleSubmit = async e => {
    e.preventDefault();
    const admin = {
      email,
      password
    };
    login(admin);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  if (isAuthenticated && !loading) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <section className="registerSection">
      <h2>Login </h2>
      <p>
        *For admin use only. Please go back to{" "}
        <Link className="link" to="/">
          Home Screen
        </Link>{" "}
        if you're not an admin. Thank you.
      </p>
      {loading && <p className="message loading">Logging in... Please wait.</p>}
      {error && <p className="message error">{error}</p>}
      <div className="content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="email item">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className={
                emailErr ? (emailErr.length >= 1 ? "hasError" : "") : ""
              }
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <FontAwesomeIcon icon="envelope" className="icon" />
            <small className="errorMsg">{emailErr}</small>
          </div>
          <div className="password item">
            <label htmlFor="password"></label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              className={
                passwordErr ? (passwordErr.length >= 1 ? "hasError" : "") : ""
              }
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <FontAwesomeIcon
              icon={showPassword ? "eye-slash" : "eye"}
              className="icon link"
              onClick={handleShowPassword}
            />
            <small className="errorMsg">{passwordErr}</small>
          </div>

          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
};

export default Login;
