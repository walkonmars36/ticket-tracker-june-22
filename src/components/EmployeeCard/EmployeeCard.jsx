import React from "react";
import "./EmployeeCard.scss";
import Employee from "../Employee/Employee";
import Counter from "../counter/Counter";

const EmployeeCard = ({team}) => {
  return (
    <div className="employee-card">
      <Employee team={team} />

      <div className="employee-card__counter-section">
        <Counter />
      </div>
    </div>
  );
};

export default EmployeeCard;
