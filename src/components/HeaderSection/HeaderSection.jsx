import React from "react";
import "./HeaderSection.scss";

const HeaderSection = ({toggleForm}) => {
  return (
    <>
      <div className="header">
        <h1 className="header__heading">Ticket Tracker</h1>
        <button onClick={toggleForm} className="header__button">
          Add Team Member
        </button>
      </div>
    </>
  );
};

export default HeaderSection;
