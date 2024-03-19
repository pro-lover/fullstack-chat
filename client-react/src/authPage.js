import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="background">
      <div className="card">
        {/* Login Form */}
        <form onSubmit={onLogin} className="form-card">
          <div className="title form-title">Login</div>
          
          <input
            className="auth-input"
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="auth-input"
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button className="auth-button" type="submit">LOG IN</button>
        </form>
      </div>

      <div className="card">
        {/* Sign Up Form */}
        <form onSubmit={onSignup} className="form-card">
          <div className="title form-title">Sign Up</div>
          <input
          className="auth-input"
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
          className="auth-input"
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <input
          className="auth-input"
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
          className="auth-input"
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
          className="auth-input"
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button className="auth-button" type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;