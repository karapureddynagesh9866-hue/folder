import React from "react";

// Renders one employee's details.
// Receives the whole object as a single prop and destructures it.
function EmployeeCard({ employee }) {
  const { name, email, age, city, role } = employee;

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="employee-card">
      <div className="employee-card__avatar">{initials}</div>

      <div className="employee-card__body">
        <h3 className="employee-card__name">{name}</h3>
        <span className="employee-card__role">{role}</span>

        <dl className="employee-card__details">
          <div className="employee-card__row">
            <dt>Email</dt>
            <dd>{email}</dd>
          </div>
          <div className="employee-card__row">
            <dt>Age</dt>
            <dd>{age}</dd>
          </div>
          <div className="employee-card__row">
            <dt>City</dt>
            <dd>{city}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default EmployeeCard;