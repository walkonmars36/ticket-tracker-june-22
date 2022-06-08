import React from "react";
import "./Employee.scss";

const Employee = ({teamMember}) => {
  const {name, role} = teamMember;

  console.log(teamMember);

  return (
    <>
      <div className="employee-details">
        <h2>{name}</h2>
        <h3>{role}</h3>
      </div>
    </>
  );
};

export default Employee;
