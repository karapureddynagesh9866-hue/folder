import React from "react";
import EmployeeList from "./employeelist";

// Shown when the user IS logged in.
// onLogout is a callback passed down from App to flip the isLoggedIn state back.
function Home({ userName, onLogout }) {
  return (
    <section>
      <div className="home-header">
        <div>
          <span className="auth-card__eyebrow-free">Signed in</span>
          <h2>Welcome, {userName}</h2>
        </div>
        <button className="btn btn--ghost" onClick={onLogout}>
          Log out
        </button>
      </div>

      <EmployeeList />
    </section>
  );
}

export default Home;