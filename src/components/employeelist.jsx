import React from "react";
import EmployeeCard from "employeecard";
import employees from "../data/employee";

// LIST RENDERING
// Uses map() to turn the employees array into a grid of EmployeeCard components.
// Each card gets a unique "key" (employee.id) so React can track it efficiently.
function EmployeeList() {
  return (
    <section className="employee-section">
      <div className="employee-section__heading">
        <h2>Team Directory</h2>
        <p>{employees.length} people across the org</p>
      </div>

      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </section>
  );
}

export default EmployeeList;