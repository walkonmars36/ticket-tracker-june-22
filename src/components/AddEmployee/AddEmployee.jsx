import React from "react";
import "./AddEmployee.scss";

const AddEmployee = () => {
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
        <input type="text" name="role" className="employee-form__input" placeholder="Enter Job Role" />
      </form>
    </div>
  );
};

export default AddEmployee;
