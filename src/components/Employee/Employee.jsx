import React from "react";
import "./Employee.scss";

const Employee = ({team}) => {
  const {name, role} = team;

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
