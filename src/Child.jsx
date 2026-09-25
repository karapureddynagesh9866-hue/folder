import React from "react";
import "./Child.css";

// Child Component
// Receives user details from the Parent (App) component via props
// and displays them inside a styled card.
function Child(props) {
  const { name, city, age, email, phone } = props;

  // Build initials for the avatar circle, e.g. "Aisha Khan" -> "AK"
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="user-card">
      <div className="user-avatar">{initials}</div>
      <h2 className="user-name">{name}</h2>

      <div className="user-details">
        <p>
          <span className="detail-label">City:</span> {city}
        </p>
        <p>
          <span className="detail-label">Age:</span> {age}
        </p>
        <p>
          <span className="detail-label">Email:</span> {email}
        </p>
        <p>
          <span className="detail-label">Phone:</span> {phone}
        </p>
      </div>
    </div>
  );
}

export default Child;