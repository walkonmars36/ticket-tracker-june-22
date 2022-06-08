import React from "react";
import "./EmployeeCard.scss";
import Employee from "../Employee/Employee";
import Counter from "../counter/Counter";

const EmployeeCard = ({teamMember}) => {
  return (
    <div className="employee-card">
      <Employee teamMember={teamMember} />

      <div className="employee-card__counter-section">
        <Counter />
      </div>
    </div>
  );
};

export default EmployeeCard;
