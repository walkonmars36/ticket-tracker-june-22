import React from "react";
import "./AddEmployee.scss";

const AddEmployee = ({toggleForm, teamMember}) => {
  const handleSubmit = (e) => {
    e.prevent.default();

    const newMember = {
      id: teamMember[teamMember.length - 1].id + 1,
      name: e.target.name.value,
      role: e.target.role.value,
    };
  };

  return (
    <div>
      <form action="" className="employee-form">
        <button className="employee-form__cancel-btn" onClick={toggleForm}>
          Cancel
        </button>
        <label htmlFor="name" name="name">
          Name:
        </label>
        <input type="text" name="name" className="employee-form__input" placeholder="Enter Full Name" />

        <label htmlFor="role" name="role">
          Role:
        </label>
        <input type="text" name="role" className="employee-form__input" placeholder="Enter Job Title" />
        <input type="submit" value="Submit" className="employee-form__submit" />
      </form>
    </div>
  );
};

export default AddEmployee;
