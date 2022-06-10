import React from "react";
import "./AddEmployee.scss";

const AddEmployee = ({toggleForm}) => {
  return (
    <div>
      <form action="" className="employee-form">
        <label htmlFor="name" name="name">
          Name:
        </label>
        <input type="text" name="name" className="employee-form__input" placeholder="Enter Full Name" />

        <label htmlFor="role" name="role">
          Role:
        </label>
        <input type="text" name="role" className="employee-form__input" placeholder="Enter Job Title" />
        <input type="submit" value="Submit" onClick={toggleForm} />
      </form>
    </div>
  );
};

export default AddEmployee;
