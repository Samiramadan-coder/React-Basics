import "../styles.css";

import { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be 8 letter long.");
      setUserColor("red");
    }

    if (email.includes("@gmail.com")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email Shouls have @gmail");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be 8 letter long.");
      setPasswordColor("red");
    }

    if (confirmPassword === password) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Confirm Password the same");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form onSubmit={validate}>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className="error">{errorUserName}</p>

          <input
            type="email"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirmation Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
