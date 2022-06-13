import React from "react";
import "./AddEmployee.scss";

const AddEmployee = ({handleAddMember, handleCancel}) => {
  return (
    <div>
      <form className="employee-form" onSubmit={handleAddMember}>
        <button className="employee-form__cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" className="employee-form__input" placeholder="Enter Full Name" />

        <label htmlFor="role">Role:</label>
        <input type="text" name="role" className="employee-form__input" placeholder="Enter Job Title" />
        <input type="submit" value="Submit" className="employee-form__submit" />
      </form>
    </div>
  );
};

export default AddEmployee;
