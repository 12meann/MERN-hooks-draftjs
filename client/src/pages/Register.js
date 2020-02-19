import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../context/AuthContext";
import "../scss/register.scss";
import { Redirect } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passcode, setPasscode] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //context
  const { register, state } = useContext(AuthContext);
  const {
    isAuthenticated,
    loading,
    error,
    passwordErr,
    confirmPasswordErr,
    nameErr,
    emailErr,
    passcodeErr,
    user
  } = state;

  const handleSubmit = e => {
    e.preventDefault();
    const newAdmin = {
      name,
      email,
      password,
      confirmPassword,
      passcode
    };
    register(newAdmin);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }
  console.log(user);
  return (
    <section className="registerSection">
      <h2>Register</h2>
      {loading && <p className="message loading">Processing... Please wait.</p>}
      {error && <p className="message error">{error}</p>}
      <div className="content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="name item">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              required
              className={nameErr ? (nameErr.length >= 1 ? "hasError" : "") : ""}
              placeholder="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <FontAwesomeIcon icon="user" className="icon" />
            <small className="errorMsg">{nameErr}</small>
          </div>
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
          <div className="confirmPassword item">
            <label htmlFor="confirmPassword"></label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              className={
                confirmPasswordErr
                  ? passwordErr.length >= 1
                    ? "hasError"
                    : ""
                  : ""
              }
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />

            <FontAwesomeIcon
              icon={showPassword ? "eye-slash" : "eye"}
              className="icon link"
              onClick={handleShowPassword}
            />
            <small className="errorMsg">{confirmPasswordErr}</small>
          </div>
          <div className="passcode item">
            <label htmlFor="passcode"></label>
            <input
              type={showPassword ? "text" : "password"}
              name="passcode"
              required
              placeholder="Passcode"
              className={
                passcodeErr ? (passcodeErr.length >= 1 ? "hasError" : "") : ""
              }
              value={passcode}
              onChange={e => setPasscode(e.target.value)}
            />

            <FontAwesomeIcon
              icon={showPassword ? "eye-slash" : "eye"}
              className="icon link"
              onClick={handleShowPassword}
            />
            <small className="errorMsg">{passcodeErr}</small>
          </div>

          <input type="submit" value="Register as Admin" />
        </form>
      </div>
    </section>
  );
};

export default Register;
