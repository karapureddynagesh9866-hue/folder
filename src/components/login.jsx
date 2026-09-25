import React, { useState } from "react";

// Shown when the user is NOT logged in.
// onLogin is a callback passed down from App to flip the isLoggedIn state.
function Login({ onLogin }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name.trim() || "Guest");
  };

  return (
    <section className="auth-card">
      <span className="auth-card__eyebrow-free">Welcome back</span>
      <h2>Log in to continue</h2>
      <p className="auth-card__subtext">
        Enter your name to access the team directory.
      </p>

      <form className="auth-card__form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Priya Nair"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit" className="btn btn--primary">
          Log in
        </button>
      </form>
    </section>
  );
}

export default Login;