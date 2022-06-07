import React from "react";
import "./EmployeeCard.scss";
import Employee from "../Employee/Employee";

const EmployeeCard = ({teamMember}) => {
  return (
    <div className="employee-card">
      <Employee teamMember={teamMember} />
    </div>
  );
};

export default EmployeeCard;
